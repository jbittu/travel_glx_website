import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './HomeComponents/Hero'
import "./HomeStyle.css"
import About from './HomeComponents/About'
import Service from './HomeComponents/Services'
import CallToAction from './HomeComponents/CallToAction'
import Faq from './HomeComponents/Faq'
import Footer from '../../Components/Footer/Footer'




const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <CallToAction />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home