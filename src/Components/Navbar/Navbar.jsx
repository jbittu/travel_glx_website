import React from "react";
import "./Navbar.css";
import { Link } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav>
      <div className="logo">
        <h1>GLX-TRV</h1>
      </div>
      <div className={ isOpen ? ("menu active"):("menu")}>
        <Link to="/" >Home</Link>
        <Link to="/pricing" >Pricing</Link>
        <Link to="/traning" >Traning</Link>
        <Link to="/contact" >Contact</Link>
      </div>
      <div className="hamburg" onClick={handleClick}>
        {
            isOpen ? (<FaTimes size={25} />) : ( <FaBars size={25} />)
        }
               
        </div>
    </nav>
  );
};

export default Navbar;
