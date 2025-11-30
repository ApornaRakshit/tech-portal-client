import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

const ProfessionalRoute = ({ children }) => {
  const [role, loading] = useRole();

  if (loading) return <p className="p-10 text-center">Loading...</p>;

  if (role !== "professional") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProfessionalRoute;
