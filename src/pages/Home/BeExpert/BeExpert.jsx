import React from "react";
import expert from "../../../assets/expert.jpg";

const BeExpert = () => {
    return (
        <div
            className="hero rounded my-3 p-20 bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${expert})`,
            }}
        >
            <div className="absolute inset-0 flex justify-center mb-12 items-center">
                <div className="bg-black/40 w-3/4 h-4/4 rounded"></div>
            </div>

            {/* Content */}
            <div className="hero-content text-start text-white relative ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">
                        Empowering Tech Journeys <br /> in Bangladesh
                    </h1>
                    <p className="mb-5">
                        Your ultimate resource for IT courses, community support, and career
                        roadmaps.
                    </p>

                    <button className="btn text-white p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-none">
                        Explore Tutorials
                    </button>

                    <button className="btn text-white p-3 ms-4 btn-outline border-white hover:bg-gradient-to-r from-blue-400 to-purple-400 rounded-full">
                        View Roadmap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeExpert;
