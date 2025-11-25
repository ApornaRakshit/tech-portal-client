import React from "react";
import { useForm } from "react-hook-form";

const RegisterEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Event registration data:", data);

    alert("Event Registered Successfully!");
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Register For Event
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Event Title */}
        <div>
          <label className="font-medium">Event Title</label>
          <input
            type="text"
            {...register("eventTitle", { required: "Event title is required" })}
            className="w-full mt-1 input input-bordered"
            placeholder="AI Bootcamp 2025"
          />
          {errors.eventTitle && (
            <p className="text-red-500 text-sm">{errors.eventTitle.message}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="font-medium">Event Description</label>
          <textarea
            {...register("description", {
              required: "Event description is required",
            })}
            className="textarea textarea-bordered w-full mt-1"
            placeholder="A short description about the event..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* User/Student Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Your Name</label>
            <input
              type="text"
              {...register("userName", { required: "Name is required" })}
              className="w-full input input-bordered mt-1"
              placeholder="Aporna Rakshit"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
          </div>

          <div>
            <label className="font-medium">Your Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full input input-bordered mt-1"
              placeholder="aporna@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Event Venue */}
        <div>
          <label className="font-medium">Event Venue</label>
          <input
            type="text"
            {...register("venue", { required: "Event venue is required" })}
            className="w-full input input-bordered mt-1"
            placeholder="Online (Google Meet) / Dhaka Campus"
          />
          {errors.venue && (
            <p className="text-red-500 text-sm">{errors.venue.message}</p>
          )}
        </div>

        {/* Interested / Going Users */}
        <div>
          <label className="font-medium">Number of Interested Users</label>
          <input
            type="number"
            {...register("interested", {
              required: "Interested users count required",
            })}
            className="w-full input input-bordered mt-1"
            placeholder="40"
          />
          {errors.interested && (
            <p className="text-red-500 text-sm">{errors.interested.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Event Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="select select-bordered w-full mt-1"
          >
            <option value="">-- Choose Category --</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Webinar">Webinar</option>
            <option value="Career Meetup">Career Meetup</option>
            <option value="Bootcamp">Bootcamp</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Event Status */}
        <div>
          <label className="font-medium">Event Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className="select select-bordered w-full mt-1"
          >
            <option value="">-- Choose Status --</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        {/* Register Button */}
        <button className="btn hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-white mx-auto block mt-4">
          Register For Event
        </button>
      </form>
    </div>
  );
};

export default RegisterEvent;
