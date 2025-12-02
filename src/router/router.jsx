// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import EventPage from "../pages/EventPage/EventPage";
import EventDetailsPage from "../pages/EventPage/EventDetailsPage";
import UserRegisterEvent from "../pages/EventPage/UserRegisterEvent";
import Tutorials from "../pages/Tutorials";
import CompetitiveProgramming from "../pages/CompetitiveProgramming/CompetitiveProgramming";
import RoadmapPage from "../components/RoadmapPage";
import BookmarkPage from "../pages/Bookmark/BookmarkPage";
import Unauthorized from "../pages/Unauthorized";

// Student Dashboard Pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ProfileSettings from "../pages/Dashboard/ProfileSettings";
import LearningPath from "../pages/Dashboard/LearningPath";
import MyCourses from "../pages/Dashboard/MyCourses";
import Events from "../pages/Dashboard/Events";

// Admin Dashboard Pages
import AdminOverview from "../pages/Dashboard/Admin/AdminOverview";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddTutorials from "../pages/Dashboard/Admin/AddTutorials";
import CreateEvents from "../pages/Dashboard/Admin/CreateEvents";

// PROFESSIONAL Dashboard Pages (NEW)
import ProfessionalDashboard from "../pages/Dashboard/Professional/ProfessionalDashboard";
import ShareResources from "../pages/Dashboard/Professional/ShareResources";
import ManageMentees from "../pages/Dashboard/Professional/ManageMentees";
import ProfessionalEvents from "../pages/Dashboard/Professional/ProfessionalEvents";
import MentorshipSessions from "../pages/Dashboard/Professional/MentorshipSessions";

// Role Protection
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/protected/AdminRoute";
import StudentRoute from "../routes/protected/StudentRoute";
import ProfessionalRoute from "../routes/protected/ProfessionalRoute";

// Auto Redirect by Role
import Redirecting from "../pages/Redirecting";

export const router = createBrowserRouter([
  // ------------------------------
  // PUBLIC WEBSITE
  // ------------------------------
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "roadmap", element: <RoadmapPage /> },
      { path: "tutorials", element: <Tutorials /> },
      { path: "competitive-programming", element: <CompetitiveProgramming /> },
      { path: "events", element: <EventPage /> },
      { path: "events/:id", element: <EventDetailsPage /> },
      { path: "events/register/:id", element: <UserRegisterEvent /> },
      { path: "bookmark", element: <BookmarkPage /> },
      { path: "unauthorized", element: <Unauthorized /> },

      // ⭐ AUTO REDIRECT BASED ON ROLE
      { path: "redirect", element: <Redirecting /> },
    ],
  },

  // ------------------------------
  // AUTH ROUTES
  // ------------------------------
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // ------------------------------
  // DASHBOARD
  // ------------------------------
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      // ⭐ Default Student Dashboard Home
      {
        index: true,
        element: (
          <StudentRoute>
            <DashboardHome />
          </StudentRoute>
        ),
      },

      // STUDENT ONLY
      {
        path: "learning-path",
        element: (
          <StudentRoute>
            <LearningPath />
          </StudentRoute>
        ),
      },

      {
        path: "my-courses",
        element: (
          <StudentRoute>
            <MyCourses />
          </StudentRoute>
        ),
      },

      // ⭐ Available for ALL logged-in users
      { path: "events", element: <Events /> },
      { path: "profile", element: <ProfileSettings /> },

      // ------------------------------
      // PROFESSIONAL ROUTES (NEW)
      // ------------------------------
      {
        path: "professional",
        element: (
          <ProfessionalRoute>
            <ProfessionalDashboard />
          </ProfessionalRoute>
        ),
      },
      {
        path: "professional/resources",
        element: (
          <ProfessionalRoute>
            <ShareResources />
          </ProfessionalRoute>
        ),
      },
      {
        path: "professional/mentees",
        element: (
          <ProfessionalRoute>
            <ManageMentees />
          </ProfessionalRoute>
        ),
      },
      {
        path: "professional/mentorship",
        element: (
          <ProfessionalRoute>
            <MentorshipSessions />
          </ProfessionalRoute>
        ),
      },
      {
        path: "professional/events",
        element: (
          <ProfessionalRoute>
            <ProfessionalEvents />
          </ProfessionalRoute>
        ),
      },

      // ------------------------------
      // ADMIN ROUTES
      // ------------------------------
      {
        path: "admin/overview",
        element: (
          <AdminRoute>
            <AdminOverview />
          </AdminRoute>
        ),
      },
      {
        path: "admin/profile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "admin/users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "admin/tutorials",
        element: (
          <AdminRoute>
            <AddTutorials />
          </AdminRoute>
        ),
      },
      {
        path: "admin/events",
        element: (
          <AdminRoute>
            <CreateEvents />
          </AdminRoute>
        ),
      },
    ],
  },
]);
