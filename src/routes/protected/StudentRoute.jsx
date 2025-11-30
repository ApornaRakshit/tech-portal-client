import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

const StudentRoute = ({ children }) => {
  const [role, loading] = useRole();

  if (loading) return <p className="p-10 text-center">Loading...</p>;

  if (role !== "student") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default StudentRoute;
