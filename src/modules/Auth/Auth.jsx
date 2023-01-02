import React from "react";
import { Outlet } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
  return (
    <div className="authentication">
      <Outlet />
    </div>
  );
};

export default Auth;
