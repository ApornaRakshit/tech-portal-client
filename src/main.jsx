import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="font-urbanist max-w-7xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
  </StrictMode>
);
