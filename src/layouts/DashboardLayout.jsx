import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();

  return (
    <div className="drawer lg:drawer-open bg-base-100 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Content */}
      <div className="drawer-content p-6">
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 w-80 p-4">

          <li><NavLink to="/dashboard">Overview</NavLink></li>
          <li><NavLink to="/dashboard/profile">Profile Settings</NavLink></li>

          {/* STUDENT */}
          {role === "student" && (
            <>
              <li className="menu-title">Student</li>
              <li><NavLink to="/dashboard/learning-path">Learning Path</NavLink></li>
              <li><NavLink to="/dashboard/my-courses">My Courses</NavLink></li>
              <li><NavLink to="/dashboard/events">Events</NavLink></li>
            </>
          )}

          {/* PROFESSIONAL */}
          {role === "professional" && (
            <>
              <li className="menu-title">Professional</li>
              <li><NavLink to="/dashboard/advanced-tutorials">Advanced Tutorials</NavLink></li>
              <li><NavLink to="/dashboard/career-guidance">Career Guidance</NavLink></li>
            </>
          )}

          {/* ADMIN */}
          {role === "admin" && (
            <>
              <li className="menu-title">Admin</li>
              <li><NavLink to="/dashboard/admin/users">Manage Users</NavLink></li>
              <li><NavLink to="/dashboard/admin/tutorials">Add Tutorials</NavLink></li>
              <li><NavLink to="/dashboard/admin/events">Create Events</NavLink></li>
            </>
          )}

        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
