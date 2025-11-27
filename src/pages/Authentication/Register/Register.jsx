import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const UserRegisterEvent = ({ event }) => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const registrationInfo = {
      name: data.name,
      email: data.email,
      eventTitle: event.title,
      date: event.date,
      time: event.time,
      mode: event.mode,
      createdAt: new Date(),
    };

    console.log("User Registration:", registrationInfo);

    try {
      const res = await axiosSecure.post("/event-registrations", registrationInfo);
      if (res.data.insertedId) {
        toast.success("Event registration completed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to register");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <button type="submit">Confirm Registration</button>
    </form>
  );
};

export default UserRegisterEvent;
