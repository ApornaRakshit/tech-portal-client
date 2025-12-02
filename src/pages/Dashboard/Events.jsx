import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const Events = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [savedEvents, setSavedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/event-registrations/${user.email}`)
      .then((res) => {
        setSavedEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading saved events:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <p className="p-10 text-center">Loading saved events...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Saved Events</h1>

      {savedEvents.length === 0 && <p>No saved events yet.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {savedEvents.map((event) => (
          <div key={event._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.eventTitle}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Mode:</strong> {event.mode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
