import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/0E3E2BE4-CAB1-4678-8BDA-3A92060C0A4C_1_105_c.jpeg";
import HeaderSocial from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samuel Ingvarsson</h1>
        <h5 className="text-light">Frontend/Web developer student</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="" />
        </div>
      </div>
    </header>
  );
}
export default Header;
