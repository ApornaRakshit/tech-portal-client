import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const UserRegisterEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [checking, setChecking] = useState(true);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();

  // 🔹 Load event info from JSON
  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((e) => e.id === Number(id));
        setEvent(matched);
      });
  }, [id]);

  // 🔹 Pre-fill logged-in user name & email (if available)
  useEffect(() => {
    if (user) {
      if (user.displayName) setValue("name", user.displayName);
      if (user.email) setValue("email", user.email);
    }
  }, [user, setValue]);

  // 🔥 Check if user already registered for this event
  useEffect(() => {
    const checkRegistration = async () => {
      if (!user?.email || !event) {
        setChecking(false);
        return;
      }

      try {
        const res = await axiosSecure.get(
          `/event-registrations/${user.email}`
        );

        const exists = res.data.some(
          (reg) => String(reg.eventId) === String(event.id)
        );

        setAlreadyRegistered(exists);
      } catch (err) {
        console.error("Error checking registration:", err);
      } finally {
        setChecking(false);
      }
    };

    checkRegistration();
  }, [user, event, axiosSecure]);

  // 🔥 Save registration + backend duplicate safety
  const onSubmit = async (data) => {
    if (alreadyRegistered) {
      toast.error("You are already registered for this event.");
      return;
    }

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
      const res = await axiosSecure.post(
        "/event-registrations",
        registrationData
      );

      if (res.data.insertedId) {
        toast.success("Registration Successful!");
        setAlreadyRegistered(true); // ✅ update UI
      } else {
        toast.error(res.data.message || "Already registered for this event!");
        setAlreadyRegistered(true);
      }

      reset();
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Registration failed");
    }
  };

  if (!event || checking) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Register for {event.title}
      </h2>

      {alreadyRegistered && (
        <p className="mb-4 text-center text-green-600 font-semibold">
          ✅ You are already registered for this event.
        </p>
      )}

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

        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Mode:</strong> {event.mode}
          </p>
        </div>

        <button
          type="submit"
          disabled={alreadyRegistered}
          className={`btn mx-auto block mt-4 text-white ${
            alreadyRegistered
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-400 to-purple-400"
          }`}
        >
          {alreadyRegistered ? "Already Registered" : "Confirm Registration"}
        </button>
      </form>
    </div>
  );
};

export default UserRegisterEvent;
