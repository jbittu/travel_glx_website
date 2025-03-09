import React from 'react'
import SinCard from './SinCard'
import "./PricingStyle.css"

const Card = () => {
  return (
    <>
    <h1 className='heading'>Pricing</h1>
    <section className="cards">
        <SinCard />
    </section>
    </>
  )
}

export default Card