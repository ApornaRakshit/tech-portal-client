import { useAuth } from "../contexts/AuthContext/AuthProvider";

const useRole = () => {
  const { userProfile, loading } = useAuth();

  const role = userProfile?.role || "student";

  return [role, loading];
};

export default useRole;
