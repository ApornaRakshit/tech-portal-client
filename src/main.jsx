import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="font-urbanist max-w-7xl mx-auto">
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  </AuthProvider>
);
