import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/AuthProvider";

const AdminRoute = ({ children }) => {
  const { userProfile, loading } = useAuth();

  if (loading) {
    return <div className="p-10 text-center text-xl">Checking admin access...</div>;
  }

  // ❌ Not admin → redirect
  if (userProfile?.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Admin → allow
  return children;
};

export default AdminRoute;
