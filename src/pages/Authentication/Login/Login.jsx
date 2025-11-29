import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";    // ✅ FIXED
import { toast } from "react-hot-toast";

import { db } from "../../../firebase/firebase.init";
import { doc, getDoc, setDoc } from "firebase/firestore";

const createUserProfile = async (user) => {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      name: user.displayName || "",
      email: user.email,
      photoURL: user.photoURL || "",
      role: "Student",
      bio: "",
      phone: "",
      facebook: "",
      linkedin: "",
      github: "",
      resumeURL: "",
      academic: {
        studentId: "",
        session: "",
        semester: "",
        dob: "",
        department: ""
      },
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
        postal: ""
      },
      skills: []
    });
  }
};



const Login = () => {
  const { loginUser } = useAuth();           // ✅ FIXED
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     await loginUser(data.email, data.password);
  //     toast.success("Login successful");
  //     navigate(from, { replace: true });
  //   } catch (err) {
  //     console.error(err);
  //     toast.error(err.message);
  //   }
  // };



  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data.email, data.password);
  
      await createUserProfile(result.user);   // ⭐ create profile in Firestore
  
      toast.success("Login successful");
  
      navigate("/dashboard/profile");         // ⭐ go to Profile page
  
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-control mt-3">
            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white w-full mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          New in this website?{" "}
          <Link className="link link-primary" to="/auth/register">
            Register
          </Link>
        </p>

        <div className="divider">OR</div>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
