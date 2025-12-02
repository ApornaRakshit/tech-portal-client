import React from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
  } = useAuth();

  const navigate = useNavigate();

  const handleSocialLogin = async (provider) => {
    try {
      let result;

      if (provider === "google") result = await signInWithGoogle();
      if (provider === "github") result = await signInWithGithub();
      if (provider === "facebook") result = await signInWithFacebook();

      toast.success("Login successful!");

      navigate("/redirect"); // ⭐ Auto redirect based on role

    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn w-full bg-white border"
      >
        Continue with Google
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="btn w-full bg-gray-800 text-white"
      >
        Continue with GitHub
      </button>

      <button
        onClick={() => handleSocialLogin("facebook")}
        className="btn w-full bg-blue-600 text-white"
      >
        Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
