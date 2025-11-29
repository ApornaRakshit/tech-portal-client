import React from "react";
import roadmapBanner from "../../src/assets/banner-roadmap.svg";


const RoadmapBanner = () => {
    return (
        <div className="w-full bg-gradient-to-b from-blue-400 to-purple-400 text-white mb-5">
            <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT TEXT */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Career Advice <br />
                        and Roadmaps <br />
                        for Software Developers
                    </h1>

                    <p className="mt-6 text-gray-200 max-w-xl">
                        Understand your path, learn step-by-step, and get guidance for every stage of your career.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center">
                    <img
                        className="w-[380px] lg:w-[480px]"
                        src={roadmapBanner}
                        alt="Roadmap Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default RoadmapBanner;
