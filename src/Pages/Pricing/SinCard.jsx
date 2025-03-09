import React from "react";
import "./PricingStyle.css";
const SinCard = () => {
  return (
    <>
      <div className="card">
        <div className="content">
          <h2>🚀 Explore the Wonders of the Galaxy!</h2>
          <p>
            Embark on an unforgettable journey through the cosmos! Visit
            breathtaking nebulae, glide past shimmering stars, and witness the
            beauty of distant planets. Choose your adventure and explore the
            universe like never before! 
          </p>
          <div className="pricing">
            <h3>🌠 Travel Plans</h3>
            <ul>
              <li>
                <strong>🌍 Orbital Escape</strong> - Experience zero gravity in
                Earth's orbit. <br />
                <span>$4,999</span>
                <button>View more Details</button>
              </li>
              <li>
                <strong>🪐 Mars Expedition</strong> - A week-long adventure on
                the Red Planet. <br />
                <span>$49,999</span>
                <button>View more Details</button>
              </li>
              <li>
                <strong>🌟 Interstellar Voyager</strong> - Travel beyond our
                solar system! <br />
                <span>$199,999</span>
                <button>View more Details</button>
              </li>
            </ul>
          </div>
          <button className="book-now">Book Your Trip 🚀</button>
        </div>
      </div>
    </>
  );
};

export default SinCard;
