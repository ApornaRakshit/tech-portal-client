import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";

// Public pages
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import EventPage from "../pages/EventPage/EventPage";
import EventDetailsPage from "../pages/EventPage/EventDetailsPage";
import UserRegisterEvent from "../pages/EventPage/UserRegisterEvent";
import Tutorials from "../pages/Tutorials";
import CompetitiveProgramming from "../pages/CompetitiveProgramming/CompetitiveProgramming";
import RoadmapPage from "../components/RoadmapPage";

// Dashboard
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ProfileSettings from "../pages/Dashboard/ProfileSettings";
import LearningPath from "../pages/Dashboard/LearningPath";
import MyCourses from "../pages/Dashboard/MyCourses";
import Events from "../pages/Dashboard/Events";

// Role-based routes
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/protected/AdminRoute";
import StudentRoute from "../routes/protected/StudentRoute";
import ProfessionalRoute from "../routes/protected/ProfessionalRoute";

// Admin pages
import AdminOverview from "../pages/Dashboard/Admin/AdminOverview";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddTutorials from "../pages/Dashboard/Admin/AddTutorials";
import CreateEvents from "../pages/Dashboard/Admin/CreateEvents";

// Others
import Unauthorized from "../pages/Unauthorized";

export const router = createBrowserRouter([
  // ---------- PUBLIC WEBSITE ----------
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
      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },

  // ---------- AUTH ROUTES ----------
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // ---------- DASHBOARD ----------
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },

      // Student-only routes
      { path: "learning-path", element: <StudentRoute><LearningPath /></StudentRoute> },
      { path: "my-courses", element: <StudentRoute><MyCourses /></StudentRoute> },

      // Professional-only routes
      { path: "events", element: <ProfessionalRoute><Events /></ProfessionalRoute> },

      // Shared: profile
      { path: "profile", element: <ProfileSettings /> },

      // ---------- ADMIN ROUTES ----------
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
