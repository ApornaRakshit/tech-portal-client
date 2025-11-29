import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.init";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  const loadEvents = async () => {
    const data = await getDocs(collection(db, "events"));
    setEvents(data.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => loadEvents(), []);

  const addEvent = async () => {
    if (!title.trim()) return;

    await addDoc(collection(db, "events"), { title });
    setTitle("");
    loadEvents();
  };

  const deleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    loadEvents();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <div className="flex gap-3">
        <input
          className="border p-2"
          placeholder="Event Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addEvent} className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </div>

      <ul className="mt-6 space-y-2">
        {events.map((ev) => (
          <li key={ev.id} className="flex justify-between items-center border p-2 rounded">
            <span>{ev.title}</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => deleteEvent(ev.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ManageEvents;
