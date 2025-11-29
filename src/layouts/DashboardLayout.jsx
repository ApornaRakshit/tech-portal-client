import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import useRole from "../hooks/useRole";
import TechPortalLogo from "../pages/shared/TechPortalLogo/TechPortalLogo";

const DashboardLayout = () => {
  const [role, loading] = useRole();

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // ⭐ Active + Hover Styling for All Menu Items
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ------------------ Sidebar ------------------ */}
      <aside className="w-72 bg-white border-r p-6 shadow-sm">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <TechPortalLogo />
        </div>

        {/* GENERAL SECTION */}
        <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
          General
        </p>

        <ul className="space-y-1 mb-6">
          <li>
            <NavLink to="/dashboard/admin/overview" className={linkClass}>
              <span>📊</span> Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/profile" className={linkClass}>
              <span>⚙️</span> Profile Settings
            </NavLink>
          </li>
        </ul>

        {/* ------------------ Student Section ------------------ */}
        {role === "student" && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
              Student
            </p>

            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard/learning-path" className={linkClass}>
                  <span>📘</span> Learning Path
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/my-courses" className={linkClass}>
                  <span>🎯</span> My Courses
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/events" className={linkClass}>
                  <span>📅</span> Events
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {/* ------------------ Admin Section ------------------ */}
        {role === "admin" && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-2">
              Admin
            </p>

            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard/admin/profile" className={linkClass}>
                  <span>👤</span> Admin Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/users" className={linkClass}>
                  <span>🧑‍🤝‍🧑</span> Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/tutorials" className={linkClass}>
                  <span>📚</span> Add Tutorials
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/events" className={linkClass}>
                  <span>🗂️</span> Create Events
                </NavLink>
              </li>
            </ul>
          </>
        )}

      </aside>

      {/* ------------------ Main Content ------------------ */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;
