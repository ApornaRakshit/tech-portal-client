import { useAuth } from "../../contexts/AuthContext/AuthProvider";

const DashboardHome = () => {
  const { userProfile, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!userProfile) return <p>No profile data</p>;

  return (
    <div>
      <img
        src={userProfile?.photoURL || "https://via.placeholder.com/150"}
        className="w-20 h-20 rounded-full"
      />

      <h2>{userProfile?.name}</h2>
      <p>{userProfile?.email}</p>
    </div>
  );
};

export default DashboardHome;
