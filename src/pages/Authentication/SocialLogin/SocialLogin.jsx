import React from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";   // ✅ FIXED
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
  } = useAuth();   // ✅ FIXED

  const handleProvider = (providerFn, name) => {
    providerFn()
      .then(() => {
        toast.success(`Logged in with ${name}`);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="text-center space-y-2">
      <button
        onClick={() => handleProvider(signInWithGoogle, "Google")}
        className="btn w-full bg-white text-black border-[#e5e5e5]"
      >
        Continue with Google
      </button>

      <button
        onClick={() => handleProvider(signInWithGithub, "GitHub")}
        className="btn w-full bg-base-200"
      >
        Continue with GitHub
      </button>

      <button
        onClick={() => handleProvider(signInWithFacebook, "Facebook")}
        className="btn w-full bg-base-200"
      >
        Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
