import React from "react";
import "./about.css";
import Me from "../../assets/0E3E2BE4-CAB1-4678-8BDA-3A92060C0A4C_1_105_c.jpeg";
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Mitt namn är Samuel Ingvarsson och är 24 år. Jag är studerar till
            frontend/webb-utvecklare på EC-Utbildning i Helsingborg.
          </p>
          <p>
            Jag är en positiv och driven person som tycker om utveckla mina
            färdigheter, både yrkesmässigt och som person. Mina största styrkor
            är att jag har lätt att lära mig nya saker samt att ha ett bra
            samarbete med andra människor.
          </p>
          <div className="about__links">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
            <a href="#" download className="btn">
              Download Personligt brev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
