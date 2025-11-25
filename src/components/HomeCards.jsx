import React from "react";

// Import images
import cpImg from "../assets/images/cp.jpg";
import webImg from "../assets/images/web.jpg";
import fullImg from "../assets/images/fullstack.jpg";
import dataImg from "../assets/images/datascience.jpg";
import aiImg from "../assets/images/ai.jpg";
import mlImg from "../assets/images/ml.jpg";
import cyberImg from "../assets/images/cyber.jpg";

// Card data
const cards = [
    {
        title: "Competitive Programming",
        icon: "⚡",
        img: cpImg,
        desc: "Master DSA, algorithms, and logic building for coding contests.",
    },
    {
        title: "Web Development",
        icon: "🌐",
        img: webImg,
        desc: "Learn HTML, CSS, JavaScript, and modern frontend technologies.",
    },
    {
        title: "Full Stack Developer",
        icon: "🧩",
        img: fullImg,
        desc: "Become a MERN-stack developer with API, backend & deployment.",
    },
    {
        title: "Data Science",
        icon: "📊",
        img: dataImg,
        desc: "Learn Python, ML techniques, statistics and data visualization.",
    },
    {
        title: "Artificial Intelligence",
        icon: "🤖",
        img: aiImg,
        desc: "Explore neural networks, deep learning, and AI fundamentals.",
    },
    {
        title: "Machine Learning",
        icon: "📈",
        img: mlImg,
        desc: "Build ML models, train datasets, and predict real-world outcomes.",
    },
    {
        title: "Cyber Security",
        icon: "🔐",
        img: cyberImg,
        desc: "Learn ethical hacking, network defense & cyber threat protection.",
    },
];

const HomeCards = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cards.map((card, index) => (
                <div
                    key={index}
                    className="shadow-md rounded-2xl p-6 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-black transition-all duration-300"
                >
                    <img
                        src={card.img}
                        alt={card.title}
                        className="h-40 w-full object-cover"
                    />

                    <div className="p-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 
              text-indigo-600 group-hover:text-white transition-all">
                            {card.title} {card.icon}
                        </h2>

                        <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-100 transition-all">
                            {card.desc}
                        </p>

                        <button
                            className="mt-4 py-2 btn btn-link text-black p-2"
                        >
                            Start Learning
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default HomeCards;
