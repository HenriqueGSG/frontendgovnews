import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
