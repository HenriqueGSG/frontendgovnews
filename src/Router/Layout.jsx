import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
