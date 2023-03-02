import React from "react";
import CV from "../../assets/CVSamuelIngvarsson.pdf";
import Letter from "../../assets/Rekommendationsbrev.pdf";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={Letter} download className="btn">
        Download Reference from previous work
      </a>
      <Link to="/contact" className="btn btn-primary">
        Let's talk
      </Link>
    </div>
  );
}
export default CTA;
