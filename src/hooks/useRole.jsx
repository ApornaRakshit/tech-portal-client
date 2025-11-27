import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext/AuthContext";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data?.role || "student");
        setLoading(false);
      });
  }, [user]);

  return [role, loading];
};

export default useRole;
