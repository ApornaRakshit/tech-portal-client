import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Roadmap from "../components/Roadmap";
import EventPage from "../pages/EventPage/EventPage";
import EventDetailsPage from "../pages/EventPage/EventDetailsPage";
import UserRegisterEvent from "../pages/EventPage/UserRegisterEvent";
import Tutorials from "../pages/Tutorials";
import CompetitiveProgramming from "../pages/CompetitiveProgramming/CompetitiveProgramming";

// Dashboard imports
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ProfileSettings from "../pages/Dashboard/ProfileSettings";
import LearningPath from "../pages/Dashboard/LearningPath";
import MyCourses from "../pages/Dashboard/MyCourses";
import Events from "../pages/Dashboard/Events";
import PrivateRoute from "../routes/PrivateRoute";

export const router = createBrowserRouter([
  // ---------- Public Main Website ----------
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "roadmap",
        element: <Roadmap />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/competitive-programming",
        element: <CompetitiveProgramming />,
      },
      {
        path: "events",
        element: <EventPage />,
      },
      {
        path: "events/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "events/register/:id",
        element: <UserRegisterEvent />,
      },
    ],
  },

  // ---------- Authentication Pages ----------
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // ---------- Dashboard (Protected Later) ----------
  {
    path: "/dashboard",
    element:
      (<PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
      ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <ProfileSettings />,
      },
      {
        path: "learning-path",
        element: <LearningPath />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "events",
        element: <Events />,
      },
    ],
  },
]);
