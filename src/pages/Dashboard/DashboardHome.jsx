import React from "react";

const DashboardHome = () => {
  // Replace these with your real dynamic values:
  const bookmarked = 2;
  const registeredEvents = 3;
  const learningProgress = "60%";
  const dailyStreak = "3 Days 🔥";

  return (
    <div className="px-6 py-6">

      {/* =====================
          TOP PROFILE CARD
      ====================== */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 mb-8 flex flex-col md:flex-row items-center gap-6">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/0jqHpR2/download.png"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover"
          />
        </div>

        {/* Profile Text */}
        <div>
          <h1 className="text-3xl font-bold">Arna</h1>
          <p className="text-gray-500">arna@gmail.com</p>

          <span className="mt-2 inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            Student Account
          </span>
        </div>
      </div>

      {/* =====================
            GRADIENT CARDS
      ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Bookmarked Tutorials */}
        <div className="p-6 rounded-2xl shadow-sm border border-gray-200 
            bg-gradient-to-r from-purple-50 to-blue-50">
          <p className="text-gray-600 text-sm font-medium">Bookmarked Tutorials</p>
          <h2 className="text-3xl font-bold mt-2">{bookmarked}</h2>
        </div>

        {/* Registered Events */}
        <div className="p-6 rounded-2xl shadow-sm border border-gray-200 
            bg-gradient-to-r from-pink-50 to-red-50">
          <p className="text-gray-600 text-sm font-medium">Registered Events</p>
          <h2 className="text-3xl font-bold mt-2">{registeredEvents}</h2>
        </div>

        {/* Learning Progress */}
        <div className="p-6 rounded-2xl shadow-sm border border-gray-200 
            bg-gradient-to-r from-blue-50 to-teal-50">
          <p className="text-gray-600 text-sm font-medium">Learning Progress</p>
          <h2 className="text-3xl font-bold mt-2">{learningProgress}</h2>
        </div>

        {/* Daily Streak */}
        <div className="p-6 rounded-2xl shadow-sm border border-gray-200 
            bg-gradient-to-r from-yellow-50 to-orange-50">
          <p className="text-gray-600 text-sm font-medium">Daily Streak</p>
          <h2 className="text-3xl font-bold mt-2">{dailyStreak}</h2>
        </div>

      </div>

      {/* =====================
         UPCOMING EVENTS
      ====================== */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Upcoming Registered Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Event 1 */}
        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <h3 className="text-lg font-semibold">Cybersecurity Hands-on Workshop</h3>
          <p className="text-sm mt-2"><strong>Date:</strong> January 10, 2026</p>
          <p className="text-sm"><strong>Time:</strong> 06:00 PM – 09:00 PM</p>
          <p className="text-sm"><strong>Mode:</strong> Online</p>
        </div>

        {/* Event 2 */}
        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <h3 className="text-lg font-semibold">AI in 2025: Career Path & Opportunities</h3>
          <p className="text-sm mt-2"><strong>Date:</strong> February 2, 2026</p>
          <p className="text-sm"><strong>Time:</strong> 08:30 PM – 10:00 PM</p>
          <p className="text-sm"><strong>Mode:</strong> Online</p>
        </div>

        {/* Event 3 */}
        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <h3 className="text-lg font-semibold">Full Stack MERN Career Meetup</h3>
          <p className="text-sm mt-2"><strong>Date:</strong> December 27, 2025</p>
          <p className="text-sm"><strong>Time:</strong> 08:00 PM – 10:00 PM</p>
          <p className="text-sm"><strong>Mode:</strong> Offline</p>
        </div>

      </div>

    </div>
  );
};

export default DashboardHome;
