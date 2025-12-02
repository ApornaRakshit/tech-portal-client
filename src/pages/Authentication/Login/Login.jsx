// Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);

      toast.success("Logged in successfully!");

      navigate("/redirect");

    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />

          <label className="mt-3 block">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />

          <button className="btn mt-4 w-full bg-purple-600 text-white">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* ⭐ Restore Google/Github/Facebook Login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
