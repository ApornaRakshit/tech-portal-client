import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
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

// Routes
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/AdminRoute";

// Admin Pages
import AdminOverview from "../pages/Dashboard/Admin/AdminOverview";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddTutorials from "../pages/Dashboard/Admin/AddTutorials";
import CreateEvents from "../pages/Dashboard/Admin/CreateEvents";

export const router = createBrowserRouter([
  // ---------- Public Website ----------
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
    ],
  },

  // ---------- Authentication ----------
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // ---------- Dashboard (Protected) ----------
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "profile", element: <ProfileSettings /> },
      { path: "learning-path", element: <LearningPath /> },
      { path: "my-courses", element: <MyCourses /> },
      { path: "events", element: <Events /> },

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
