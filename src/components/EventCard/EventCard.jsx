import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const EventCard = ({ event }) => {

    const date = new Date(event.date);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();

    return (
        <Link
            to={`/events/${event.id}`}
            className="shadow-md rounded-2xl p-3 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-black transition-all duration-300"
        >
            {/* IMAGE */}
            <div className="relative h-40 w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />

                {/* DATE BADGE */}
                <div className="absolute top-3 left-3 bg-white rounded-md shadow p-1 px-2 text-center">
                    <p className="text-xl font-bold">{day}</p>
                    <p className="text-[10px] font-semibold text-purple-600">{month}</p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-3">

                <h3 className="text-lg font-semibold line-clamp-2">
                    {event.title}
                </h3>

                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{event.time}</p>

                    <span
                        className={`text-sm font-medium ${event.mode === "Online" ? "text-green-600" : "text-sky-500"
                            }`}
                    >
                        {event.mode}
                    </span>
                </div>

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-1 text-black text-sm">
                        <FiUsers className="text-lg" />
                        <span className="font-semibold">+{event.registeredCount || 0} Interested
                        </span>
                    </div>


                    <div className="flex justify-end">
                        <AiOutlineStar className="text-xl text-gray-500 hover:text-yellow-400 cursor-pointer" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;
