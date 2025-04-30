import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
