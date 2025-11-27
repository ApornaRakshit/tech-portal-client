import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {

    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);

  const steps = [
    { title: "Phase1", details: "Computer Fundamentals, Programming Languages : C/C++" },
    { title: "Phase2", details: "Competitve Programming, DSA" },
    { title: "Phase3", details: "Git & GitHub, Web Development: HTML, CSS, JavaScript, React, Firebase, Nodejs, Express js, MongoDB" },
    { title: "Phase4", details: "MySQL, SQL, python" },
    { title: "Semester 3", details: "Software Development" },
    { title: "Semester 4", details: "MERN Stack, APIs, Authentication" },
    { title: "Semester 5", details: "Data Structures, DevOps Basics" },
    { title: "Semester 6", details: "AI/ML, Capstone Project, Interview Prep" },
  ];

  return (
    <div className="py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-12">
        Semester Roadmap
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical line */}
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

export default Roadmap;
