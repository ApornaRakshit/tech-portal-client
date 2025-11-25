import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiCalendar, FiClock, FiMapPin, FiUser, FiTag } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        const matchedEvent = data.find((e) => e.id === Number(id));
        setEvent(matchedEvent);
      });
  }, [id]);

  if (!event) return <div className="text-center py-10">Loading...</div>;

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Banner */}
      <div className="w-full h-60 md:h-72 overflow-hidden rounded-xl">
        <img src={event.image} className="w-full h-full object-cover" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Left Content */}
        <div className="md:col-span-2">
          <p className="text-purple-700 font-semibold">
            {event.date} • {event.time}
          </p>

          <div className="flex justify-between items-start mt-2">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <AiFillStar className="text-yellow-400 text-3xl" />
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-2">About the Event</h2>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>

          {/* Register Now */}
          <Link to={`/events/register/${event.id}`}>
            <button className="btn btn-outline hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-white mx-auto block mt-4">Register Now</button>
          </Link>

          {/* Related Events */}
          <h2 className="text-2xl font-bold mt-16 mb-4">Related Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedEvents.map((rel) => (
              <Link
                key={rel.id}
                to={`/events/${rel.id}`}
                className="shadow-md border rounded-xl overflow-hidden hover:shadow-xl"
              >
                <img src={rel.image} className="h-32 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{rel.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{rel.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="border p-6 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4">Event Overview</h3>

          <div className="flex items-center gap-3 pb-4 border-b">
            <img
              src={event.organizerImage}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm text-gray-600">Organized By</p>
              <p className="font-semibold">{event.organizer}</p>
            </div>
          </div>

          <div className="space-y-3 mt-4 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <FiCalendar /> {event.date}
            </p>
            <p className="flex items-center gap-2">
              <FiClock /> {event.time}
            </p>
            <p className="flex items-center gap-2">
              <FiTag /> {event.mode}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin /> {event.location}
            </p>
            <p className="flex items-center gap-2">
              <FiUser /> {event.interested} people interested
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
