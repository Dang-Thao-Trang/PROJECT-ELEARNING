import React from "react";
import FaceBook from "../../components/FaceBook";
import Banner from "./Banner/Banner";
import Category from "./Category";
import Course from "./Course";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Category />
      <Course />
      <FaceBook />
    </div>
  );
};

export default Home;
