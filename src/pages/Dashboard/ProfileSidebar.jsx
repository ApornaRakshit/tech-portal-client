import { FaHome, FaUserFriends, FaEnvelope, FaUserTie, FaBriefcase, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import TechPortalLogo from "../shared/TechPortalLogo/TechPortalLogo";

const ProfileSidebar = ({ profile }) => {
  return (
    <div className="w-full lg:w-72 mt-12 bg-gray-100 border-r h-full p-6">

      {/* Logo */}
      <TechPortalLogo></TechPortalLogo>

      {/* User Photo */}
      <div className="flex flex-col items-center">
        <img
          src={profile.photoURL}
          className="w-24 h-24 rounded-full object-cover border shadow"
        />
        <h2 className="text-lg font-semibold mt-3">{profile.name}</h2>
        <p className="text-gray-600">{profile.role}</p>

        <p className="mt-4 text-gray-700 text-sm">
          <strong>Session:</strong> {profile.academic.session || "N/A"}
        </p>

        <p className="text-gray-700 text-sm">
          <strong>Department:</strong>
          <br /> {profile.academic.department}
        </p>
      </div>

      {/* Nav Items */}
      <div className="mt-10 space-y-4 text-gray-700 font-medium">
        <p className="flex items-center gap-3"><FaHome /> Home</p>
        <p className="flex items-center gap-3"><FaUserFriends /> My Posts</p>
        <p className="flex items-center gap-3"><FaEnvelope /> Messages</p>
        <p className="flex items-center gap-3"><FaUserTie /> Connect</p>
        <p className="flex items-center gap-3"><FaBookOpen /> Mentorship</p>
        <p className="flex items-center gap-3"><FaBriefcase /> Jobs</p>
        <p className="flex items-center gap-3"><FaCalendarAlt /> Events</p>
        <p className="flex items-center gap-3"><FaBookOpen /> Resources</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
