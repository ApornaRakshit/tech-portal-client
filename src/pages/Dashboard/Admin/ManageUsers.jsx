import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase.init";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);

    const allUsers = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setUsers(allUsers);
  };

  const changeRole = async (id, newRole) => {
    await updateDoc(doc(db, "users", id), { role: newRole });
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="hover">
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td className="font-semibold">{u.role}</td>
                <td>
                  <button
                    onClick={() => changeRole(u.id, "student")}
                    className="btn btn-sm bg-blue-500 text-white mr-2"
                  >
                    Student
                  </button>

                  <button
                    onClick={() => changeRole(u.id, "admin")}
                    className="btn btn-sm bg-purple-600 text-white"
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
