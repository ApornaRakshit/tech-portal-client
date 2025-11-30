import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthProvider";


const AdminRoute = ({ children }) => {
  const { userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="p-10 text-center text-xl">
        Checking admin access...
      </div>
    );
  }

  // ❌ Not admin → redirect to dashboard or unauthorized page
  if (userProfile?.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Admin → access granted
  return children;
};

export default AdminRoute;
