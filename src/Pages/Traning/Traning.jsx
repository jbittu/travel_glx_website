import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Headre/Header";
import Footer from "../../Components/Footer/Footer";
import "./Traning.css"
const Traning = () => {
  return (
    <>
      <Navbar />
      <Header heading="Traning Page" discription="Before venturing into the cosmos, every space traveler needs rigorous training. Our expert-led programs ensure you're fully prepared for the challenges of space travel. From zero-gravity simulations to emergency protocols, we’ve got you covered!" />
      
      <div className="training-cards">
       
          <div className="training-program">
            <h3>🚀 Zero-Gravity Training</h3>
            <p>Experience weightlessness in simulated zero-G environments.</p>
            <span>Duration: 1 Week</span>
            <button>Enroll Now</button>
          </div>
          <div className="training-program">
            <h3>🛰 Spacecraft Operations</h3>
            <p>Learn how to operate spacecraft systems and handle emergencies.</p>
            <span>Duration: 2 Weeks</span>
            <button>Enroll Now</button>
          </div>
          <div className="training-program">
            <h3>🌎 Survival Training</h3>
            <p>Prepare for space landing and survival techniques.</p>
            <span>Duration: 10 Days</span>
            <button>Enroll Now</button>
          </div>
          <div className="training-program">
            <h3>🔭 Astronomy & Navigation</h3>
            <p>Master space navigation and celestial mechanics.</p>
            <span>Duration: 3 Weeks</span>
            <button>Enroll Now</button>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default Traning;
