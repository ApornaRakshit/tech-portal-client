import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TechPortalLogo from "../TechPortalLogo/TechPortalLogo";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";

// ICONS
import { TbRoute } from "react-icons/tb";
import { FiTool, FiCalendar, FiBookmark, FiHome } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  // THEME
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // ACTIVE LINK STYLE
  const getActiveClass = ({ isActive }) =>
    `relative font-medium px-3 py-2 flex items-center gap-1 transition duration-200
     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 dark:after:bg-purple-300
     after:w-0 hover:after:w-full after:transition-all after:duration-300
     ${isActive ? "text-blue-600 dark:text-purple-300 font-semibold after:w-full" : ""}`;

  return (
    <div className="navbar bg-base-200 shadow-sm fixed top-0 left-0 w-full z-50">

      {/* LEFT SECTION */}
      <div className="navbar-start">
        {/* MOBILE MENU BUTTON */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* MOBILE MENU DROPDOWN */}
          <ul tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-56 p-3 shadow space-y-1">

            <li><NavLink to="/" className={getActiveClass}><FiHome /> Home</NavLink></li>
            <li><NavLink to="/roadmap" className={getActiveClass}><TbRoute /> Roadmap</NavLink></li>
            <li><NavLink to="/resources" className={getActiveClass}><FiTool /> Resources</NavLink></li>
            <li><NavLink to="/events" className={getActiveClass}><FiCalendar /> Events</NavLink></li>
            <li><NavLink to="/Bookmark" className={getActiveClass}><FiBookmark /> Bookmark</NavLink></li>
          </ul>
        </div>

        {/* LOGO */}
        <div className="ml-2 cursor-pointer">
          <TechPortalLogo />
        </div>
      </div>

      {/* CENTER NAV ITEMS — DESKTOP */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><NavLink to="/" className={getActiveClass}> Home</NavLink></li>
          <li><NavLink to="/roadmap" className={getActiveClass}> Roadmap</NavLink></li>
          <li><NavLink to="/tutorials" className={getActiveClass}> Tutorials</NavLink></li>
          <li><NavLink to="/events" className={getActiveClass}> Events</NavLink></li>
          <li><NavLink to="/trends" className={getActiveClass}> Tech Trends</NavLink></li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-end gap-3">
        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} className="btn btn-circle btn-ghost">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* USER PROFILE DROPDOWN */}
        {/* USER PROFILE DROPDOWN */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"
                  }
                  alt="avatar"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64"
            >

              {/* Email */}
              <li className="text-center font-semibold py-2 border-b">
                {user.displayName || user.email}
              </li>

              {/* USER MENU LINKS */}
              <li className="mt-2">
                <NavLink to="/roadmap" className="flex font-semibold items-center gap-2">
                  <TbRoute /> Roadmap
                </NavLink>
              </li>

              <li>
                <NavLink to="/resources" className="flex font-semibold items-center gap-2">
                  <FiTool /> Resources
                </NavLink>
              </li>

              <li>
                <NavLink to="/events" className="flex font-semibold items-center gap-2">
                  <FiCalendar /> Events
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/bookmark" className="flex  font-semibold items-center gap-2">
                  <FiBookmark /> Bookmark
                </NavLink>
              </li>

              {/* VIEW PROFILE */}
              <li className="pt-2 border-t">
                <NavLink
                  to="/dashboard/profile"
                  className="btn btn-sm w-full bg-blue-500 text-white"
                >
                  View Profile
                </NavLink>
              </li>

              {/* LOGOUT */}
              <li>
                <button
                  onClick={logoutUser}
                  className="btn btn-sm w-full bg-red-500 text-white mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-sm bg-blue-500 text-white px-4"
            >
              Login
            </NavLink>

            <NavLink
              to="/auth/register"
              className="btn btn-sm bg-purple-500 text-white px-4"
            >
              Register
            </NavLink>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
