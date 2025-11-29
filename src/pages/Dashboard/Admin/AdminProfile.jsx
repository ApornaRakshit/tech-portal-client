import React from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";

const AdminProfile = () => {
  const { userProfile } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={userProfile?.photoURL || "https://via.placeholder.com/100"}
          className="w-24 h-24 rounded-full border shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold">{userProfile?.name}</h2>
          <p className="text-gray-700">{userProfile?.email}</p>
          <p className="text-purple-700 font-semibold">Admin</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Welcome, Admin! From your panel you can manage users, add tutorials, and create events.
      </p>
    </div>
  );
};

export default AdminProfile;
