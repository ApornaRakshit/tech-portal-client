import Navbar from "../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
