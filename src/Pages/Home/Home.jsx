import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './HomeComponents/Hero'
import "./HomeStyle.css"
import About from './HomeComponents/About'
import Service from './HomeComponents/Services'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
      
    </div>
  )
}

export default Home