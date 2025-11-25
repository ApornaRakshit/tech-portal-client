import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/events.json") // json inside public/data/events.json
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(err => console.error("Error loading events:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Tech Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
