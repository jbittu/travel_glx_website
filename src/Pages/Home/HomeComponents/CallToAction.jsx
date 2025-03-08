import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import Modle from './Modle';

const CallToAction = () => {

    const [modle, setmodle] = useState(false);

    const handleClick = () =>{
        setmodle(!modle);
    }
  return (

    <>
     <section className="call-action">
        <h2>Hurry Up Book Your Ticket</h2>
        <button onClick={handleClick}>Know More</button>
    </section>

    {
        modle && <Modle modle={modle} handleClick={handleClick} />
    }
    </>
   
  )
}

export default CallToAction