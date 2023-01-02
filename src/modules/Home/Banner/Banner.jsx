import React from "react";
import "./Banner.scss";
import ReactPlayer from "react-player";

const Banner = () => {
  return (
    <div className="banner">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=7AqLKAeUlT8"
        width="100%"
        height="100%"
        className="video_banner"
        playing={true}
        // loop={true}
      />
    </div>
  );
};

export default Banner;
