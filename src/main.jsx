import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import { Toaster } from "react-hot-toast";
import "./index.css";
import DataProvider from "./contexts/DataProvider";
import { BookmarkProvider } from "./contexts/BookmarkContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookmarkProvider>
      <AuthProvider>
        <Toaster position="top-right" />

        <DataProvider className="font-urbanist max-w-7xl mx-auto">
          <RouterProvider router={router} />
        </DataProvider>

      </AuthProvider>
    </BookmarkProvider>
  </StrictMode>
);
