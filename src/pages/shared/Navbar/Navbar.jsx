import React from "react";
import { NavLink } from "react-router-dom";
import TechPortalLogo from "../TechPortalLogo/TechPortalLogo";
import { useAuth } from "../../../contexts/AuthContext/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  // THEME TOGGLE
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // ACTIVE NAVLINK ANIMATION
  const navLinkClass =
    "relative font-medium px-3 py-2 transition duration-200 " +
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 dark:after:bg-purple-300 " +
    "after:w-0 hover:after:w-full after:transition-all after:duration-300";

  const getActiveClass = ({ isActive }) =>
    isActive
      ? navLinkClass +
        " text-blue-600 dark:text-purple-300 font-semibold after:w-full"
      : navLinkClass;

  return (
    <div className="navbar bg-base-200 shadow-sm fixed top-0 left-0 w-full z-50">
      {/* LEFT SECTION */}
      <div className="navbar-start">
        {/* MOBILE MENU ICON */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost p-2">
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

          {/* MOBILE DROPDOWN */}
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-56 p-3 shadow-lg space-y-1"
          >
            <li>
              <NavLink to="/" className={getActiveClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/roadmap" className={getActiveClass}>
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorials" className={getActiveClass}>
                Tutorials
              </NavLink>
            </li>
            <li>
              <NavLink to="/tech-trends" className={getActiveClass}>
                Tech-Trends
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={getActiveClass}>
                Events
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RESPONSIVE LOGO */}
        <div className="ml-2 flex items-center">
          {/* MOBILE TITLE */}
          <span className="text-xl font-extrabold block lg:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            TEP
          </span>

          {/* DESKTOP LOGO */}
          <span className="hidden lg:block">
            <TechPortalLogo />
          </span>
        </div>
      </div>

      {/* CENTER — DESKTOP NAV ITEMS */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink to="/" className={getActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/roadmap" className={getActiveClass}>
              Roadmap
            </NavLink>
          </li>
          <li>
            <NavLink to="/tutorials" className={getActiveClass}>
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech-trends" className={getActiveClass}>
              Tech-Trends
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={getActiveClass}>
              Events
            </NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT — THEME TOGGLE + USER */}
      <div className="navbar-end gap-3">
        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} className="btn btn-circle btn-ghost">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* USER SECTION */}
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
              className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="mb-2 text-center font-semibold">
                {user.displayName || user.email}
              </li>
              <li>
                <button
                  onClick={logoutUser}
                  className="btn btn-sm w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn btn-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4"
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
