import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import { useSelector } from "react-redux";

const RoutLayout = () => {
  // const { loading } = useSelector();
  // if (loading) {
  //   return (
  //     <div style={{ paddingTop: "100px" }}>
  //       <Loading />
  //     </div>
  //   );
  // }
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RoutLayout;
