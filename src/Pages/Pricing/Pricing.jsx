import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Headre/Header'
import Footer from '../../Components/Footer/Footer'
import Card from './Card'
import "./PricingStyle.css"

const Pricing = () => {
  return (
    <>
    <Navbar />
    <Header heading = "Pricing Page" discription = "Explore the universe without limits! Whether you're a first-time traveler or an experienced space explorer, we have the perfect plan for you. Choose from our budget-friendly orbital tours or go beyond our solar system with premium interstellar voyages!"/>
    
    <Card />
    <Footer />
    </>
  )
}

export default Pricing