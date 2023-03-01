import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <NavLink
        to="/"
        exact
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </NavLink>

      <NavLink
        to="/about"
        exact
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </NavLink>

      <NavLink
        to="/experience"
        exact
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </NavLink>

      <NavLink
        to="/portfolio"
        exact
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsFillBagFill />
      </NavLink>

      <NavLink
        to="/contact"
        exact
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  );
}

export default Nav;
