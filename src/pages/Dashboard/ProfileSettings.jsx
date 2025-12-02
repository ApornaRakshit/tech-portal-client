import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.init";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileSettings = () => {
  const { userProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState(userProfile || {});

  if (!userProfile) return <p>Loading...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return formData.photoURL;

    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "ml_default");

    const res = await fetch("https://api.cloudinary.com/v1_1/demo/image/upload", {
      method: "POST",
      body: data,
    });

    const img = await res.json();
    return img.secure_url;
  };

  const handleSave = async () => {
    try {
      const imgURL = await uploadImage();

      await updateDoc(doc(db, "users", userProfile.uid), {
        ...formData,
        photoURL: imgURL,
      });

      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    }
  };

  return (
    <div className="p-10">

      {/* -------------------------------------- */}
      {/*               VIEW MODE                */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/*              VIEW MODE                 */}
      {/* -------------------------------------- */}
      {!isEditing && (
        <div className="max-w-6xl mx-auto">

          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div className="flex gap-6 items-center">
              <img
                src={formData.photoURL}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full border shadow"
              />

              <div>
                <h2 className="text-4xl font-bold">{formData.name}</h2>
                {/* DYNAMIC ROLE */}
                <p className="text-gray-500 text-lg capitalize">
                  {userProfile?.role || "student"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-sky-700 text-white px-5 py-2 rounded-lg shadow hover:bg-sky-600"
            >
              Edit Profile
            </button>
          </div>

          {/* GRID LAYOUT → LEFT: About / RIGHT: Academic + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">

            {/* LEFT SIDE — ABOUT + CONTACT */}
            <div>
              <h3 className="text-xl font-bold mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{formData.bio}</p>

              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt /> {formData.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope /> {userProfile.email}
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <FaFacebook /> {formData.facebook}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaLinkedin /> {formData.linkedin}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaGithub /> {formData.github}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — ACADEMIC + SKILLS */}
            <div>

              {/* Academic */}
              <h3 className="text-xl font-bold mb-3 border-b pb-1">
                Academic / Career Information
              </h3>

              <div className="grid grid-cols-2 gap-6 text-gray-700 mt-4">
                <p><strong>Student ID:</strong> {formData.academic?.studentId}</p>
                <p><strong>Department:</strong> {formData.academic?.department}</p>

                <p><strong>Session:</strong> {formData.academic?.session}</p>
                <p><strong>Semester:</strong> {formData.academic?.semester}</p>

                <p><strong>Date of Birth:</strong> {formData.academic?.dob}</p>
              </div>

              {/* Skills under Academic */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-3">Skills</h3>

                <div className="flex flex-wrap gap-3">
                  {formData.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-sky-100 text-purple-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}


      {/* -------------------------------------- */}
      {/*               EDIT MODE                */}
      {/* -------------------------------------- */}
      {isEditing && (
        <div className="max-w-4xl mx-auto space-y-5">

          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

          {/* IMAGE UPLOAD */}
          <div>
            <img
              src={formData.photoURL}
              className="w-32 h-32 rounded-full object-cover mb-2"
            />
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
          </div>

          {/* NAME + PHONE */}
          <div className="grid grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />

            <input
              className="input input-bordered"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>

          {/* SOCIAL LINKS */}
          <input
            className="input input-bordered w-full"
            name="facebook"
            value={formData.facebook || ""}
            onChange={handleChange}
          />

          <input
            className="input input-bordered w-full"
            name="linkedin"
            value={formData.linkedin || ""}
            onChange={handleChange}
          />

          <input
            className="input input-bordered w-full"
            name="github"
            value={formData.github || ""}
            onChange={handleChange}
          />

          {/* BIO */}
          <textarea
            className="textarea textarea-bordered w-full"
            name="bio"
            rows={3}
            value={formData.bio || ""}
            onChange={handleChange}
          />

          {/* Academic */}
          <h3 className="text-xl font-bold mt-4">Academic</h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              placeholder="Student ID"
              name="academic.studentId"
              value={formData.academic?.studentId || ""}
              onChange={handleChange}
            />

            <input
              className="input input-bordered"
              placeholder="Department"
              name="academic.department"
              value={formData.academic?.department || ""}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              placeholder="Session"
              name="academic.session"
              value={formData.academic?.session || ""}
              onChange={handleChange}
            />

            <input
              className="input input-bordered"
              placeholder="Semester"
              name="academic.semester"
              value={formData.academic?.semester || ""}
              onChange={handleChange}
            />
          </div>

          <input
            className="input input-bordered w-full"
            placeholder="Date of Birth"
            name="academic.dob"
            value={formData.academic?.dob || ""}
            onChange={handleChange}
          />

          {/* SKILLS */}
          <input
            className="input input-bordered w-full"
            placeholder="Comma separated skills"
            value={formData.skills?.join(", ") || ""}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value.split(", ") })
            }
          />

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="btn bg-purple-600 text-white mt-6"
          >
            Save Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
