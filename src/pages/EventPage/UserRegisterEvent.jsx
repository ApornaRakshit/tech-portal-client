import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserRegisterEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((e) => e.id === Number(id));
        setEvent(matched);
      });
  }, [id]);

  const onSubmit = (data) => {
    console.log("User Registration:", data);
    alert("Registration Successful!");
    reset();
  };

  if (!event) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Register for {event.title}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            className="input input-bordered w-full mt-1"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            className="input input-bordered w-full mt-1"
          />
        </div>

        <input
          type="hidden"
          {...register("eventTitle")}
          value={event.title}
        />

        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Mode:</strong> {event.mode}</p>
        </div>

        <button className="btn hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-white mx-auto block mt-4">
          Confirm Registration
        </button>
      </form>
    </div>
  );
};

export default UserRegisterEvent;
