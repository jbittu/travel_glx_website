import React from "react";
import video from "../../../assets/spsce.mp4";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted></video>
      <div className="contains">
        <h1>Travelling To Galaxt</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, iure?
        </p>
        <div className="button">
          <Link to= "/traning"><strong>Try Now</strong></Link>
          <Link to= "/contact"><strong>Lunch Now</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
