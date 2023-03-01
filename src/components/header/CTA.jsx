import React from "react";
import CV from "../../assets/CV-Samuel-Ingvarsson.pdf";
import Letter from "../../assets/Rekommendationsbrev.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={Letter} download className="btn">
        Download Reference from previous work
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}
export default CTA;
