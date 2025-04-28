import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import fb from '../../assets/facebook.jpg'
import twit from '../../assets/twet.jpg'
import insta from '../../assets/insta.jpg'

const Footer = () => {
  const social = [fb, twit, insta];
  
  return (
    <footer>
      <h1>GLX TRV</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/traning">Training</Link> {/* fixed spelling */}
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social">
        {social.map((item, index) => (
          <img key={index} src={item} alt="social" />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
