import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/useAuthContext";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";

const Register = () => {
  const { registerUser } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await registerUser(data.email, data.password);
      toast.success("Account created successfully");
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
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered"
              placeholder="Email"
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
              placeholder="Confirm Password"
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
