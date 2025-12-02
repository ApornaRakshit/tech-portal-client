import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.init";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const LearningPath = () => {
  const { user } = useAuth();
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  // ********** LESSON LIST **********
  const lessons = [
    "Introduction to Programming",
    "Variables & Data Types",
    "Loops & Conditions",
    "Functions Basics",
    "React Basics",
    "React Components",
    "Firebase Authentication",
    "Database Firestore"
  ];

  // ********** LOAD USER PROGRESS **********
  useEffect(() => {
    if (!user?.uid) return;

    const fetchProgress = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setCompletedLessons(snap.data().completedLessons || []);
      }
      setLoading(false);
    };

    fetchProgress();
  }, [user]);

  // ********** MARK LESSON COMPLETE **********
  const handleLessonComplete = async (lesson) => {
    const ref = doc(db, "users", user.uid);

    const updatedList = [...completedLessons, lesson];

    await updateDoc(ref, { completedLessons: updatedList });
    setCompletedLessons(updatedList);
  };

  // ********** BUTTON UI **********
  const renderLessonButton = (lesson) => {
    const isCompleted = completedLessons.includes(lesson);

    if (isCompleted) {
      return (
        <button
          disabled
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-not-allowed"
        >
          Completed ✓
        </button>
      );
    }

    return (
      <button
        onClick={() => handleLessonComplete(lesson)}
        className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg"
      >
        Mark as Completed
      </button>
    );
  };

  if (loading) return <p className="text-center p-10">Loading...</p>;

  // ********** PROGRESS **********
  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Learning Path</h1>

      <p className="text-xl font-semibold mb-4">
        Progress: <span className="text-purple-600">{progress}%</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow-sm bg-white flex justify-between items-center hover:shadow-lg transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold">{lesson}</h3>

              {completedLessons.includes(lesson) ? (
                <p className="text-green-600 text-sm mt-1">✓ Completed</p>
              ) : (
                <p className="text-gray-500 text-sm mt-1">Not completed</p>
              )}
            </div>

            {/* Dynamic Button */}
            {renderLessonButton(lesson)}
          </div>
        ))}

      </div>
    </div>
  );
};

export default LearningPath;
