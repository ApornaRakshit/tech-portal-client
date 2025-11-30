import {
  FiMap,
  FiBookOpen,
  FiCalendar,
  FiBookmark,
} from "react-icons/fi";

import TechPortalLogo from "../shared/TechPortalLogo/TechPortalLogo";
import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-[15px] font-medium transition 
     ${isActive ? "bg-purple-100 text-purple-700 font-semibold" : "hover:bg-gray-100"}`;

  return (
    <div className="w-full lg:w-72 bg-white min-h-screen border-r px-6 py-8">

      {/* Logo */}
      <div className="mb-10">
        <TechPortalLogo />
      </div>

      {/* SECTION TITLE */}
      <p className="text-xs font-bold text-gray-500 mb-2 tracking-wide">GENERAL</p>

      {/* GENERAL ITEMS */}
      <div className="space-y-1 mb-8">

        <NavLink to="/dashboard/profile" className={linkClass}>
          <FiBookmark size={18} />
          Profile Settings
        </NavLink>
      </div>

      {/* SECTION TITLE */}
      <p className="text-xs font-bold text-gray-500 mb-2 tracking-wide">STUDENT</p>

      {/* STUDENT ITEMS */}
      <div className="space-y-1">

        <NavLink to="/dashboard/learning-path" className={linkClass}>
          <FiMap size={18} />
          Learning Path
        </NavLink>

        <NavLink to="/dashboard/courses" className={linkClass}>
          <FiBookOpen size={18} />
          My Courses
        </NavLink>

        <NavLink to="/dashboard/events" className={linkClass}>
          <FiCalendar size={18} />
          Events
        </NavLink>

        <NavLink to="/dashboard/bookmarks" className={linkClass}>
          <FiBookmark size={18} />
          Bookmark
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSidebar;
