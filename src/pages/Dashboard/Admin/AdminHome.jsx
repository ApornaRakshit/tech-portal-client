import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase.init";

const AdminHome = () => {
  const [stats, setStats] = useState({ users: 0, events: 0, tutorials: 0 });

  useEffect(() => {
    const loadStats = async () => {
      const users = await getDocs(collection(db, "users"));
      const events = await getDocs(collection(db, "events"));
      const tutorials = await getDocs(collection(db, "tutorials"));

      setStats({
        users: users.size,
        events: events.size,
        tutorials: tutorials.size
      });
    };

    loadStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-purple-100 rounded shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">{stats.users}</p>
        </div>

        <div className="p-6 bg-blue-100 rounded shadow">
          <h2 className="text-xl font-semibold">Total Events</h2>
          <p className="text-3xl font-bold">{stats.events}</p>
        </div>

        <div className="p-6 bg-pink-100 rounded shadow">
          <h2 className="text-xl font-semibold">Total Tutorials</h2>
          <p className="text-3xl font-bold">{stats.tutorials}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
