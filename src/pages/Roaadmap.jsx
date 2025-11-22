import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Roadmap = () => {
    React.useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const semesters = [
        {
            id: 1,
            title: "Semester 1",
            courses: ["Programming Basics", "C Programming", "Mathematics", "ICT"],
        },
        {
            id: 2,
            title: "Semester 2",
            courses: ["OOP", "DSA", "Discrete Math", "DBMS"],
        },
        {
            id: 3,
            title: "Semester 3",
            courses: ["Algorithms", "OS", "Networking"],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <h1 className="text-4xl font-bold text-center mb-10">
                Study / Career Roadmap
            </h1>

            <div className="relative border-l-4 border-blue-500 mx-auto w-11/12 md:w-2/3">
                {semesters.map((sem) => (
                    <div key={sem.id} data-aos="fade-up" className="mb-12 ml-6">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                        <h2 className="text-2xl font-bold mb-2">{sem.title}</h2>
                        <ul className="space-y-1">
                            {sem.courses.map((c, index) => (
                                <li
                                    key={index}
                                    className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl transition"
                                >
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
