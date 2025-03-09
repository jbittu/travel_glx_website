import React from "react";
import "./Header.css";
import headerImg from "../../assets/header.jpg";
const Header = ({heading}) => {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          suscipit odit aspernatur accusantium cum molestiae ipsa minima soluta
          quam perspiciatis.
        </p>
      </section>
    </>
  );
};

export default Header;
