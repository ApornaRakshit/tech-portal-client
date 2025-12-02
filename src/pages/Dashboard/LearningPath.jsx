import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LearningPath = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const steps = [
    { title: "Phase: 1", details: "Computer Fundamentals, Programming Languages : C/C++" },
    { title: "Phase: 2", details: "Competitive Programming, DSA" },
    { title: "Phase: 3", details: "Git & GitHub, Web Development (HTML, CSS, JS, React, Firebase, Node.js, Express.js, MongoDB)" },
    { title: "Phase: 4", details: "MySQL, SQL, Python" },
    { title: "Phase: 5", details: "DevOps Basics" },
    { title: "Phase: 6", details: "Software Development" },
    { title: "Phase: 7", details: "Machine Learning / Artificial Intelligence" },
    { title: "Phase: 8", details: "Capstone Project, Interview Prep" }
  ];

  return (
    <div className="px-5 py-5">

      <h1 className="text-3xl font-bold mb-2">Learning Path</h1>
      <p className="text-gray-600 mb-10">
        Follow your personalized learning roadmap to grow in your IT career.
      </p>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`mb-12 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2">
              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.details}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 border-4 border-white"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LearningPath;
