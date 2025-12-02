import React from "react";
import expert from "../../../assets/expert.jpg";

const BeExpert = () => {
  return (
    <div
      className="relative w-full rounded-xl my-6 overflow-hidden"
      style={{
        backgroundImage: `url(${expert})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative px-6 py-20 md:px-12 lg:px-20 flex items-center">
        <div className="text-white w-full md:w-1/2 space-y-5">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Empowering Tech Journeys <br /> in Bangladesh
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-md">
            Your ultimate resource for IT courses, community support, and career
            roadmaps.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button className="px-6 py-3 text-white rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-none">
              Explore Tutorials
            </button>

            <button className="px-6 py-3 text-white rounded-full border border-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition">
              View Roadmap
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BeExpert;
