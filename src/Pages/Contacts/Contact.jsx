import React from "react";
import Header from "../../Components/Headre/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import About from "../Home/HomeComponents/About";
import Form from "./ContactComponents/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <About />
      <Header heading = "Contatc page" discription="Are you ready to take your first step beyond Earth? Join Galaxy
            Travel today and become a pioneer of space tourism. The universe
            is waiting for you!"/>
      <Form />
      
      <Footer />
    </>
  );
};

export default Contact;
