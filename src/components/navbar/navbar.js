import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import "./navbar.scss";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="div-logo">
        <NavLink to="/portfolio">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>

      <button className="hamburger">
        <img src={hamburgerMenu} alt="burger" className="hamburger-menu" />
      </button>
      <nav className="navbar-links">
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Experience
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          About Me
        </NavLink>
      </nav>
    </header>
  );
}
