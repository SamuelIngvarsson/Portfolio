import React from "react";
import "./portfolio.css";
import WhackAMole from "../../assets/4BEC8FCB-02B1-4C85-B535-557BBAD850FC.jpeg";
import MineSweeper from "../../assets/4C4FFA44-2A97-4E76-808A-0BC33F8EE1C1.jpeg";
import WeatherAPI from "../../assets/83A89CE6-B071-47A0-8034-3192E98F86F0_4_5005_c.jpeg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WhackAMole} alt="WhackAMole" />
          </div>
          <h3>Whack a Mole</h3>
          <a
            href="https://github.com/SamuelIngvarsson/WhackAMole"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MineSweeper} alt="MineSweeper" />
          </div>
          <h3>MineSweeper </h3>
          <a
            href="https://github.com/SamuelIngvarsson/Minesweeper"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WeatherAPI} alt="WheatherAPI" />
          </div>
          <h3>Weather API </h3>
          <a
            href="https://github.com/SamuelIngvarsson/Inl-mningsuppgift-2-V-der"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
}
export default Portfolio;
