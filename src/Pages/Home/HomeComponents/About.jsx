import React from "react";
import aboutImg from "../../../assets/about.jpg";

const About = () => {
  return (
    <>
      <h1 className="heading">About Us</h1>
      <section className="about">
        <img src={aboutImg} alt="about img" />
        <div className="content">
          <h2>lorem text</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            doloremque aspernatur consequuntur excepturi odio obcaecati? Modi
            vitae eos voluptate facilis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat, doloremque aspernatur consequuntur
            excepturi odio obcaecati? Modi vitae eos voluptate facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            impedit modi corrupti recusandae, molestias corporis tempore ipsum
            similique pariatur molestiae, fuga illo error deserunt maxime
            laboriosam. Soluta, quisquam. Libero, obcaecati.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis odio tempore, odit beatae, fugit, sunt dolorum debitis itaque mollitia eveniet possimus quae error! Repudiandae accusamus, quae maiores atque natus accusantium omnis sit! Repellat dolorem officia quidem voluptate cupiditate consequuntur consectetur perspiciatis adipisci quis, eaque cum at aut animi blanditiis necessitatibus.</p>
        </div>
      </section>
    </>
  );
};

export default About;
