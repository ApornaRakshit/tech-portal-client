import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Redirecting = () => {
  const { userProfile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!userProfile) return;

    // Send based on role
    if (userProfile.role === "admin") {
      navigate("/dashboard/admin/overview");
    } else if (userProfile.role === "professional") {
      // you can later make a dedicated professional dashboard
      navigate("/dashboard/events");
    } else {
      // default → student
      navigate("/dashboard");
    }
  }, [userProfile, loading, navigate]);

  return (
    <div className="p-10 text-center text-xl">
      Redirecting to your dashboard...
    </div>
  );
};

export default Redirecting;
