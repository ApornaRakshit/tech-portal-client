import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/events")
      .then((res) => setEvents(res.data))
      .catch(err => console.error("Error loading events:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Tech Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
