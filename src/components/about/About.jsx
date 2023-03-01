import React from "react";
import "./about.css";
import Me from "../../assets/0E3E2BE4-CAB1-4678-8BDA-3A92060C0A4C_1_105_c.jpeg";
import PersonalLetter from "../../assets/Personligt brev - Samuel Ingvarsson.pdf";
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
            My name is Samuel Ingvarsson and I am 24 years old. I am studying
            frontend/web developer at EC-Utbildning in Helsingborg.
          </p>
          <p>
            I am a positive and hard working person who likes to develop my
            skills, both professionally and as a person. My greatest strengths
            is that I find it easy to learn new things and to have a good
            cooperation with other people.
          </p>
          <div className="about__links">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
            <a href={PersonalLetter} download className="btn">
              Download Personal letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
