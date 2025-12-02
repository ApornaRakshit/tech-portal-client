import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import useRole from "../hooks/useRole";
import TechPortalLogo from "../pages/shared/TechPortalLogo/TechPortalLogo";

import {
  FiHome,
  FiSettings,
  FiBookOpen,
  FiTarget,
  FiCalendar,
  FiUsers,
  FiUser,
  FiPlusSquare,
  FiShare2,
  FiUserCheck,
  FiUsers as FiMentees,
} from "react-icons/fi";

const DashboardLayout = () => {
  const [role, loading] = useRole();
  const [open, setOpen] = useState(false);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold border-r-4 border-purple-600"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded shadow-md"
      >
        ☰
      </button>

      {/* Dark Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-72 bg-white border-r p-6 shadow-sm
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <TechPortalLogo />
        </div>

        {/* ============= GENERAL ============= */}
        <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
          General
        </p>

        <ul className="space-y-1 mb-6">
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              <FiHome className="text-lg" /> Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/profile" className={linkClass}>
              <FiSettings className="text-lg" /> Profile Settings
            </NavLink>
          </li>
        </ul>

        {/* ============= STUDENT MENU ============= */}
        {role === "student" && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
              Student
            </p>

            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard/learning-path" className={linkClass}>
                  <FiBookOpen className="text-lg" /> Learning Path
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/my-courses" className={linkClass}>
                  <FiTarget className="text-lg" /> My Courses
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/events" className={linkClass}>
                  <FiCalendar className="text-lg" /> Events
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {/* ============= ADMIN MENU ============= */}
        {role === "admin" && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-2">
              Admin
            </p>

            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard/admin/profile" className={linkClass}>
                  <FiUser className="text-lg" /> Admin Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/users" className={linkClass}>
                  <FiUsers className="text-lg" /> Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/tutorials" className={linkClass}>
                  <FiPlusSquare className="text-lg" /> Add Tutorials
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/admin/events" className={linkClass}>
                  <FiCalendar className="text-lg" /> Create Events
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {/* ============= PROFESSIONAL MENU ============= */}
        {role === "professional" && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-2">
              Professional
            </p>

            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard/professional" className={linkClass}>
                  <FiUser className="text-lg" /> Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/professional/share-resources"
                  className={linkClass}
                >
                  <FiShare2 className="text-lg" /> Share Resources
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/professional/mentees"
                  className={linkClass}
                >
                  <FiMentees className="text-lg" /> Manage Mentees
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/professional/mentorship"
                  className={linkClass}
                >
                  <FiUserCheck className="text-lg" /> Mentorship Sessions
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/professional/events"
                  className={linkClass}
                >
                  <FiCalendar className="text-lg" /> Host / Join Events
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
