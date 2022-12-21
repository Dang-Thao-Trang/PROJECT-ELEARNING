import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const RoutLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RoutLayout;
