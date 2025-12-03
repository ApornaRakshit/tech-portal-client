import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [registered, setRegistered] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Load all events
  useEffect(() => {
    axiosSecure
      .get("/events")
      .then((res) => setEvents(res.data))
      .catch(err => console.error("Error loading events:", err));
  }, []);

  // Load user registered events (important!)
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/event-registrations/${user.email}`)
      .then(res => {
        // Only store eventId list
        const ids = res.data.map(r => Number(r.eventId));
        setRegistered(ids);
      })
      .catch(err => console.error("Error loading registered:", err));
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Tech Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}

            // HIDE star if already registered
            isRegistered={registered.includes(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
