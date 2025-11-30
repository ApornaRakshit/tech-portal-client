import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const ProfileSettings = () => {
  const { userProfile, loading } = useAuth();
  const [openEdit, setOpenEdit] = useState(false);

  if (loading || !userProfile) {
    return <div className="p-10 text-center text-xl">Loading...</div>;
  }

  const profile = userProfile;

  return (
    <div className="p-6 md:p-10">

      {/* ---------- TOP: PHOTO + NAME + BUTTON ---------- */}
      <div className="flex items-center gap-6 mb-12">

        {/* Photo */}
        <img
          src={profile.photoURL || "/default-user.png"}
          className="w-28 h-28 rounded-full border shadow object-cover"
          alt="profile"
        />

        {/* Name */}
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-600 capitalize">{profile.role}</p>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setOpenEdit(true)}
          className="ml-auto px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        >
          Edit Profile
        </button>
      </div>

      {/* ---------- MAIN GRID (NO GAP!) ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ---------- LEFT — ABOUT ---------- */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>

          <p className="text-gray-700 leading-relaxed">
            {profile.bio || "No bio added yet."}
          </p>

          <div className="mt-6 space-y-3 font-medium">
            {/* Phone */}
            <p className="flex items-center gap-3">
              <FiPhone className="text-lg" /> {profile.phone || "N/A"}
            </p>

            {/* Email */}
            <p className="flex items-center gap-3">
              <FiMail className="text-lg" /> {profile.email}
            </p>

            {/* Facebook */}
            {profile.facebook && (
              <p className="flex items-center gap-3 text-blue-600">
                <FaFacebook className="text-lg" />
                <a href={profile.facebook} target="_blank" rel="noreferrer">
                  {profile.facebook}
                </a>
              </p>
            )}

            {/* LinkedIn */}
            {profile.linkedin && (
              <p className="flex items-center gap-3 text-blue-600">
                <FaLinkedin className="text-lg" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </p>
            )}

            {/* GitHub */}
            {profile.github && (
              <p className="flex items-center gap-3 text-gray-800">
                <FaGithub className="text-lg" />
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* ---------- RIGHT — ACADEMIC + SKILLS ---------- */}
        <div>
          <h2 className="text-xl font-bold border-b pb-2 mb-4">
            Academic / Career Information
          </h2>

          <div className="grid grid-cols-2 gap-4 text-[15px] leading-relaxed">
            <p>
              <strong>Student ID:</strong> {profile.academic?.studentId || "N/A"}
            </p>
            <p>
              <strong>Department:</strong> {profile.academic?.department || "N/A"}
            </p>
            <p>
              <strong>Session:</strong> {profile.academic?.session || "N/A"}
            </p>
            <p>
              <strong>Semester:</strong> {profile.academic?.semester || "N/A"}
            </p>
            <p>
              <strong>Date of Birth:</strong> {profile.academic?.dob || "N/A"}
            </p>
          </div>

          {/* Skills */}
          <h2 className="text-xl font-bold border-b pb-2 mt-10 mb-4">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {profile.skills?.length > 0 ? (
              profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-purple-200 text-purple-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-600">No skills added yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* ---------- EDIT MODAL ---------- */}
      {openEdit && (
        <EditProfileModal
          profile={{ ...profile, uid: profile.uid }}
          close={() => setOpenEdit(false)}
        />
      )}
    </div>
  );
};

export default ProfileSettings;
