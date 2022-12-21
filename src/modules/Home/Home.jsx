import React from "react";
import Category from "./Category";
import Course from "./Course";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Category />
      <Course />
    </div>
  );
};

export default Home;
