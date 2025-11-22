import React from "react";
import { Link, NavLink } from "react-router-dom";
import TechPortalLogo from "../TechPortalLogo/TechPortalLogo";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="font-medium">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to="/roadmap">Roadmap</NavLink>
      </li>

      <li>
        <NavLink to="" className="font-medium">
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="font-medium">
          Tech-Trends
        </NavLink>
      </li>
    </>
  );

  return (
    // <div className="navbar bg-base-100 shadow-sm px-4">
    <div className="navbar bg-base-200 shadow-sm fixed top-0 left-0 z-50">

      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            {navItems}
          </ul>
        </div>

        {/* Logo */}
        <TechPortalLogo />
      </div>

      {/* CENTER (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <Link to="/login" className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

