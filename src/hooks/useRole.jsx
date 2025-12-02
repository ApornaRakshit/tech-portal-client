// src/hooks/useRole.js
import { useAuth } from "../contexts/AuthContext/AuthProvider";

const useRole = () => {
  const { userProfile, loading } = useAuth();

  // Normalize role: lowercase + trim
  const role = userProfile?.role
    ? userProfile.role.toString().trim().toLowerCase()
    : null;

  return [role, loading];
};

export default useRole;
