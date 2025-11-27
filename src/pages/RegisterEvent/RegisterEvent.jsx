import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserRegisterEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  // Load event info from JSON
  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((e) => e.id === Number(id));
        setEvent(matched);
      });
  }, [id]);

  // 🔥 Save registration + increase event count (fixed)
  const onSubmit = async (data) => {
    const registrationData = {
      name: data.name,
      email: data.email,
      eventId: event.id,
      eventTitle: event.title,
      date: event.date,
      time: event.time,
      mode: event.mode,
      createdAt: new Date(),
    };

    try {
      // 1️⃣ Save registration
      const res = await axiosSecure.post("/event-registrations", registrationData);

      console.log("Registration response:", res.data);

      // 2️⃣ Check what backend returned
      if (res.data.insertedId) {
        toast.success("Registration Successful!");
      } else {
        toast.error(res.data.message || "Already registered for this event!");
      }

      reset();
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Registration failed");
    }
  };


  if (!event) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Register for {event.title}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>
          <label className="font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="font-medium">Email</label>
          <input
            {...register("email", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Your email"
          />
        </div>

        <input type="hidden" {...register("eventTitle")} value={event.title} />

        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Mode:</strong> {event.mode}</p>
        </div>

        <button
          type="submit"
          className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white mx-auto block mt-4"
        >
          Confirm Registration
        </button>
      </form>
    </div>
  );
};

export default UserRegisterEvent;
