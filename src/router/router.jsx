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
// import RegisterEvent from "../pages/RegisterEvent/RegisterEvent";

// import PrivateRoute from "../routes/PrivateRoute"; // if needed

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
        path: "events",
        element: <EventPage></EventPage>,
      },
      {
        path: "events/:id",
        element: <EventDetailsPage />
      },
      {
        path: "events/register/:id",
        element: <UserRegisterEvent />,
      }
      
      
      // {
      //   path: "registerEvent",
      //   element: (
      //     <PrivateRoute>
      //       <RegisterEvent></RegisterEvent>
      //     </PrivateRoute>
      //   ),
      // },
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
]);
