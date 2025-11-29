import React, { useState } from "react";
import { db } from "../../../firebase/firebase.init";
import { collection, addDoc } from "firebase/firestore";

const CreateEvents = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const createEvent = async () => {
    if (!name || !date || !location) return alert("All fields are required");

    await addDoc(collection(db, "events"), {
      name,
      date,
      location,
      createdAt: new Date(),
    });

    setName("");
    setDate("");
    setLocation("");
    alert("Event Created!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>

      <div className="space-y-4 max-w-md">
        <input
          className="input input-bordered w-full"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="btn bg-green-600 text-white" onClick={createEvent}>
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvents;
