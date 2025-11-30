import { useAuth } from "../contexts/AuthContext/AuthProvider";

const useRole = () => {
  const { userProfile, loading } = useAuth();

  // Extract role from Firestore profile
  const role = userProfile?.role || null;

  return [role, loading];
};

export default useRole;
