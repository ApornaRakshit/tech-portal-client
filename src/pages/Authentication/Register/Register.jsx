import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";   // ⭐ ADD THIS

const Register = () => {
  const { registerUser, saveUserToFirestore } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // ⭐ 1. Create user in Firebase Auth
      const result = await registerUser(data.email, data.password);
      const firebaseUser = result.user;

      // ⭐ 2. Update Firebase Auth profile
      await updateProfile(firebaseUser, {
        displayName: data.name || "",
      });

      // ⭐ 3. Save Firestore user record (role = student)
      await saveUserToFirestore(firebaseUser.uid, {
        name: data.name || "",
        email: data.email,
        photoURL: firebaseUser.photoURL || "",
        role: "student",
        createdAt: new Date(),
      });

      toast.success("Account created successfully!");
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl text-center font-bold mb-4">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name")}
              className="input input-bordered"
              placeholder="Your Name"
            />

            {/* Email */}
            <label className="label mt-3">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <label className="label mt-3">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Confirm Password */}
            <label className="label mt-3">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
              className="input input-bordered"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white w-full mt-4"
            >
              Register
            </button>
          </fieldset>

          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <Link className="link link-primary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>

        <div className="divider">OR</div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
