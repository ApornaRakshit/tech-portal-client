import React from "react";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";
// import ProfileSidebar from "./ProfileSidebar";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileSettings = () => {
  const { userProfile, loading } = useAuth();
  const profile = userProfile;

  if (loading || !profile)
    return <div className="p-10 text-center text-xl">Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row">

      {/* LEFT FIXED SIDEBAR */}
      

      {/* RIGHT MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* Top name + photo section */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={profile.photoURL}
            className="w-20 h-20 rounded-full border shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-gray-600">{profile.role}</p>
          </div>

          <button className="ml-auto px-4 py-2 bg-purple-600 text-white rounded-md">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE CONTENT */}
          <div>

            {/* About */}
            <section>
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>

              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 font-semibold"><FiPhone /> {profile.phone}</p>
                <p className="flex items-center gap-2 font-semibold"><FiMail /> {profile.email}</p>

                <p className="flex items-center font-semibold gap-2"><FaFacebook /> 
                  <a href="https://www.facebook.com/aporna.rakshit.5" target="_blank">https://www.facebook.com/aporna.rakshit.5</a>
                </p>

                <p className="flex items-center gap-2 font-semibold"><FaLinkedin />
                  <a href="https://www.linkedin.com/in/apornarakshit/" target="_blank">https://www.linkedin.com/in/apornarakshit/</a>
                </p>

                <p className="flex items-center gap-2 font-semibold"><FaGithub />
                  <a href="https://github.com/ApornaRakshit" target="_blank">https://github.com/ApornaRakshit</a>
                </p>
              </div>

            </section>

            {/* Buttons */}
            <div className="mt-8 space-y-3 max-w-xs">
              <button className="w-full py-2 bg-purple-600 text-white rounded">Update Profile</button>
              <button className="w-full py-2 bg-blue-600 text-white rounded">Change Password</button>
              <button className="w-full py-2 bg-red-600 text-white rounded">Delete Account</button>
            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>

            {/* Academic Information */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2">Academic / Career Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <p><strong>Student ID:</strong> 2015034{profile.academic.studentId}</p>
                <p><strong>Department:</strong> Computer Science and Engineering{profile.academic.department}</p>

                <p><strong>Session:</strong> 2019-20{profile.academic.session}</p>
                <p><strong>Semester:</strong> 8th{profile.academic.semester}</p>

                <p><strong>Date of Birth:</strong> 2002-05-16{profile.academic.dob}</p>

                <p>
                  <strong>Resume:</strong>
                  <span className="text-purple-600 ml-2">Upload Resume</span>
                </p>
              </div>
            </section>

            {/* Address */}
            <section className="mt-10">
              <h3 className="text-xl font-semibold border-b pb-2">Address</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <p><strong>Street:</strong> 132, 3/A Boudh Mondir</p>
                <p><strong>City:</strong> Dhaka</p>
                <p><strong>State/Region:</strong> Dhaka</p>
                <p><strong>Country:</strong> Bangladesh</p>
                <p><strong>Postal Code:</strong> 1204</p>
              </div>
            </section>

            {/* Skills */}
            <section className="mt-10">
              <h3 className="text-xl font-semibold border-b pb-2">Skills</h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {profile.skills?.map((sk) => (
                  <span key={sk} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full">
                    {sk}
                  </span>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfileSettings;
