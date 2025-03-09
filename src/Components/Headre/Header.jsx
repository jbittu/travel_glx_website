import React from "react";
import "./Header.css";
import headerImg from "../../assets/header.jpg";
const Header = ({heading, discription}) => {
  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <h1>{heading}</h1>
        <p>
         {discription}
        </p>
      </section>
    </>
  );
};

export default Header;
