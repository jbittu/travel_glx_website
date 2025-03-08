import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const GalaxyServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,      
    centerPadding: "20px", 
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const services = [
    {
      title: "Moon Expeditions",
      desc: "Experience breathtaking views of Earth while walking on the Moon.",
      img: "src/assets/slider/s4.jpg",
    },
    {
      title: "Mars Colonization Tours",
      desc: "Join the first human colony on Mars with guided exploration.",
      img: "src/assets/slider/s5.jpg",
    },
    {
      title: "Zero Gravity Experience",
      desc: "Float freely in the zero-gravity chambers of our spacecraft.",
      img: "src/assets/slider/s1.jpg",
    },
    {
      title: "Interstellar Adventures",
      desc: "Travel beyond our solar system and explore new galaxies.",
      img: "src/assets/slider/s2.jpg",
    },
    {
      title: "Space Luxury Cruises",
      desc: "Relax in a 5-star space hotel while orbiting the Earth.",
      img: "src/assets/slider/s3.jpg",
    },
  ];

  return (
    <section className="galaxy-services">
      <h2>Service</h2>
      <p>Embark on the most extraordinary journeys beyond Earth.</p>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GalaxyServices;
