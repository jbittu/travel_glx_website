import React from "react";
import aboutImg from "../../../assets/about.jpg";

const About = () => {
  return (
    <>
      <h1 className="heading">About Us</h1>
      <section className="about">
        <img src={aboutImg} alt="about img" />
        <div className="content">
          <h2>About Galaxy Travel</h2>
          <p>
            Welcome to <strong>Galaxy Travel</strong>, your gateway to the ultimate space
            tourism experience! Our mission is to make interstellar travel
            accessible, exciting, and unforgettable for adventurers like
            you. Whether you dream of floating in zero gravity, witnessing Earth
            from space, or stepping onto another planet, we bring those dreams
            to life.
          </p>

          <h3>🌌 Our Journey</h3>
          <p>
            Founded by a team of space enthusiasts, engineers, and
            visionaries, <strong>Galaxy Travel</strong> started as a dream—to take humanity
            beyond Earth’s boundaries. With cutting-edge technology,
            safety-first engineering, and partnerships with top aerospace
            companies, we are making space travel a reality for everyone.
          </p>

          <h3>🚀 What We Offer</h3>
          <p>
            Our space travel programs are designed for all levels of
            explorers, from first-time space tourists to seasoned astronauts.
            Our customizable space packages include:
          </p>
         

          
          

          <h3>🌎 Join the Future of Space Travel with <strong>Galaxy Travel</strong></h3>
          <p>
            Are you ready to take your first step beyond Earth? Join Galaxy
            Travel today and become a pioneer of space tourism. The universe
            is waiting for you! 🚀✨
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
