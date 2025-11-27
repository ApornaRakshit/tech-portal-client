import React from "react";
import { NavLink } from "react-router-dom";
import TechPortalLogo from "../TechPortalLogo/TechPortalLogo";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";
   // ✅ FIXED

const Navbar = () => {
  const { user, logoutUser } = useAuth();   // ✅ FIXED

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/roadmap" className="font-medium">
          Roadmap
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutorials" className="font-medium">
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/tech-trends" className="font-medium">
          Tech-Trends
        </NavLink>
      </li>
      <li>
        <NavLink to="/events" className="font-medium">
          Events
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm fixed top-0 left-0 z-50">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            {navItems}
          </ul>
        </div>

        <TechPortalLogo />
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
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
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="mb-1 font-semibold">
                  <span>{user.displayName || user.email}</span>
                </li>
                <li>
                  <button
                    onClick={logoutUser}
                    className="btn btn-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white"
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
