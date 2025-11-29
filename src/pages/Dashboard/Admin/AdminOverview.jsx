import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { FaUsers, FaCalendarAlt, FaListUl, FaPlayCircle } from "react-icons/fa";

const AdminOverview = () => {
  // ------- CORE STATS (YOUR REAL DATA) -------
  const totalUsers = 30;
  const totalEvents = 5;
  const totalCategories = 6;
  const totalPlaylists = 17;

  // ------- MOCK ANALYTICS DATA (can later come from Firestore) -------

  // Growth over last 6 months
  const growthData = [
    { month: "Jun", users: 10, events: 1 },
    { month: "Jul", users: 14, events: 2 },
    { month: "Aug", users: 18, events: 2 },
    { month: "Sep", users: 22, events: 3 },
    { month: "Oct", users: 26, events: 4 },
    { month: "Nov", users: 30, events: 5 },
  ];

  // Users by role (you can adjust these numbers later)
  const usersByRole = [
    { name: "Students", value: 22 },
    { name: "Professionals", value: 6 },
    { name: "Admins", value: 2 },
  ];

  // Tutorial stats
  const tutorialStats = [
    { name: "Categories", value: totalCategories },
    { name: "Playlists", value: totalPlaylists },
  ];

  // Example “latest users” table data
  const latestUsers = [
    { name: "Student A", email: "studenta@mail.com", role: "Student" },
    { name: "Student B", email: "studentb@mail.com", role: "Student" },
    { name: "Pro User", email: "pro@mail.com", role: "Professional" },
    { name: "Admin One", email: "admin1@mail.com", role: "Admin" },
  ];

  // Example “upcoming events” data
  const upcomingEvents = [
    { title: "Web Dev Bootcamp", date: "2025-12-10", type: "Online" },
    { title: "CP Contest", date: "2025-12-15", type: "Offline" },
    { title: "AI Workshop", date: "2025-12-20", type: "Online" },
  ];

  const COLORS = ["#6366F1", "#0EA5E9", "#22C55E", "#F97316"];

  return (
    <div className="p-6 space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Overview</h1>
        <p className="text-sm text-gray-500">
          Tech Portal · Light Admin Dashboard
        </p>
      </div>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Users */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-3 rounded-full bg-indigo-50">
            <FaUsers className="text-indigo-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>
        </div>

        {/* Events */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-3 rounded-full bg-sky-50">
            <FaCalendarAlt className="text-sky-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Events</p>
            <p className="text-2xl font-bold">{totalEvents}</p>
          </div>
        </div>

        {/* Tutorial Categories */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-3 rounded-full bg-emerald-50">
            <FaListUl className="text-emerald-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Tutorial Categories</p>
            <p className="text-2xl font-bold">{totalCategories}</p>
          </div>
        </div>

        {/* Playlists */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-3 rounded-full bg-rose-50">
            <FaPlayCircle className="text-rose-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Playlists</p>
            <p className="text-2xl font-bold">{totalPlaylists}</p>
          </div>
        </div>
      </div>

      {/* GROWTH LINE CHART */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          Platform Growth (Last 6 Months)
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#6366F1"
                strokeWidth={2}
                name="Users"
              />
              <Line
                type="monotone"
                dataKey="events"
                stroke="#F97316"
                strokeWidth={2}
                name="Events"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CHARTS ROW: PIE + BAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* USERS BY ROLE PIE CHART */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={usersByRole}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {usersByRole.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* EVENT TYPE PIE (OPTIONAL – can reuse events breakdown later) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Tutorial Overview</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tutorialStats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SIMPLE EVENT TYPE BLOCK (you can also make this a chart) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Events Snapshot</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>📍 Offline Events: 3</li>
            <li>🌐 Online Events: 2</li>
            <li>⭐ Highlight: AI / Web Dev focused events</li>
          </ul>
        </div>
      </div>

      {/* TABLES: LATEST USERS & UPCOMING EVENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Users */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Latest Users</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {latestUsers.map((u, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{u.name}</td>
                  <td className="py-2 text-gray-500">{u.email}</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-xs">
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Event</th>
                <th className="py-2">Date</th>
                <th className="py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map((e, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{e.title}</td>
                  <td className="py-2 text-gray-500">{e.date}</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded-full bg-indigo-50 text-xs text-indigo-700">
                      {e.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
