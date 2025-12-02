// src/pages/Dashboard/Admin/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase.init";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users from Firestore
  const loadUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userList = querySnapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setUsers(userList);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Update user role
  const handleRoleChange = async (userId, newRole) => {
    try {
      const ref = doc(db, "users", userId);

      await updateDoc(ref, { role: newRole });

      toast.success(`Role changed to ${newRole}!`);

      loadUsers(); // Refresh list
    } catch (error) {
      toast.error("Failed to update role");
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Manage Users</h1>

      <table className="table w-full">
        <thead>
          <tr className="text-left border-b">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td>{user.name || "No Name"}</td>
              <td>{user.email}</td>
              <td className="font-semibold">{user.role}</td>

              <td className="space-x-2">
                <button
                  onClick={() => handleRoleChange(user.id, "student")}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Student
                </button>

                <button
                  onClick={() => handleRoleChange(user.id, "professional")}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Professional
                </button>

                <button
                  onClick={() => handleRoleChange(user.id, "admin")}
                  className="px-3 py-1 bg-purple-600 text-white rounded"
                >
                  Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
