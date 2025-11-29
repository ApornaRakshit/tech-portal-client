import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- Data Sources ---
const usersByRole = [
  { name: "Students", value: 22 },
  { name: "Professionals", value: 6 },
  { name: "Admins", value: 2 },
];

const eventType = [
  { name: "Offline", value: 3 },
  { name: "Online", value: 2 },
];

const tutorialStats = [
  { name: "Categories", value: 6 },
  { name: "Playlists", value: 17 },
];

// Colors
const COLORS = ["#7C3AED", "#0EA5E9", "#10B981", "#F43F5E"];

const AdminCharts = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Analytics Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ---------- Pie Chart: Users by Role ---------- */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h3 className="font-semibold mb-4">Users by Role</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={usersByRole}
                cx="50%"
                cy="50%"
                label
                outerRadius={80}
                dataKey="value"
              >
                {usersByRole.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ---------- Pie Chart: Event Type ---------- */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h3 className="font-semibold mb-4">Event Type Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={eventType}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {eventType.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ---------- Bar Chart: Tutorial Stats ---------- */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h3 className="font-semibold mb-4">Tutorial Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tutorialStats}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default AdminCharts;
