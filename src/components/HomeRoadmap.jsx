import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeRoadmap = () => {
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
  ];

  return (
    <div className="py-16 px-4 sm:px-6">

      {/* Prevent Overflow */}
      <div className="w-full overflow-x-hidden">

        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line — Desktop Only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`w-full flex my-10 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="w-full md:w-[45%] bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition relative">

                {/* Purple Dot — Desktop Only */}
                <div className="hidden md:block w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -mt-6 border-4 border-white"></div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.details}</p>
              </div>
            </div>
          ))}

        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/roadmap"
            className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-white"
          >
            View more...
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomeRoadmap;
