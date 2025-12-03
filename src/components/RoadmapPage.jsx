import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import RoadmapBanner from "./RoadmapBanner";

// 🔥 IMPORT ALL IMAGES CORRECTLY
import careerImg from "../assets/images/general-career.png";
import cpImg from "../assets/images/cp.jpg";
import webImg from "../assets/images/web.jpg";
import fullstackImg from "../assets/images/fullstack.jpg";
import datasciImg from "../assets/images/datascience.jpg";
import aiImg from "../assets/images/ai.jpg";

const RoadmapPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const steps = [
    { title: "Phase: 1", details: "Computer Fundamentals, Programming Languages : C/C++" },
    { title: "Phase: 2", details: "Competitive Programming, DSA" },
    {
      title: "Phase: 3",
      details:
        "Git & GitHub, Web Development (HTML, CSS, JS, React, Firebase, Node.js, Express.js, MongoDB)",
    },
    { title: "Phase: 4", details: "MySQL, SQL, Python" },
    { title: "Phase: 5", details: "DevOps Basics" },
    { title: "Phase: 6", details: "Software Development" },
    { title: "Phase: 7", details: "Machine Learning / Artificial Intelligence" },
    { title: "Phase: 8", details: "Capstone Project, Interview Prep" },
  ];

  return (
    <div className="px-4 sm:px-6">

      {/* Prevent Horizontal Scroll */}
      <div className="w-full overflow-x-hidden">

        {/* Banner */}
        <RoadmapBanner />

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto mt-10">

          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          {/* Phases */}
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`w-full flex md:items-center my-10 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              <div className="w-full md:w-[45%] bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition relative">

                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -mt-6 border-4 border-white"></div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ====================== LEARNING CARDS ====================== */}
        <div className="max-w-6xl mx-auto mt-20 mb-16 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. Career Advice */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={careerImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Career Advice 🗂️</h3>
              <p className="text-gray-600 mt-1">Articles, blogs, roadmaps, guides for all you need to know.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

          {/* 2. Competitive Programming */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={cpImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Competitive Programming ⚡</h3>
              <p className="text-gray-600 mt-1">Master DSA, algorithms, and logic building for contests.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

          {/* 3. Web Development */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={webImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Web Development 🌐</h3>
              <p className="text-gray-600 mt-1">Learn HTML, CSS, JavaScript, and modern frontend technologies.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

          {/* 4. Full Stack Developer */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={fullstackImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Full Stack Developer 🧩</h3>
              <p className="text-gray-600 mt-1">Become a MERN-stack developer with backend + deployment.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

          {/* 5. Data Science */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={datasciImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Data Science 📚</h3>
              <p className="text-gray-600 mt-1">Learn Python, ML techniques, statistics, and data visualization.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

          {/* 6. Artificial Intelligence */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 
hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:shadow-xl">
            <img src={aiImg} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-sky-600">Artificial Intelligence 🤖</h3>
              <p className="text-gray-600 mt-1">Explore neural networks, deep learning, and AI fundamentals.</p>
              <Link to="/tutorials" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
                Start Learning
              </Link>
            </div>
          </div>

        </div>
        {/* ====================== END CARDS ====================== */}


      </div>
    </div>
  );
};

export default RoadmapPage;
