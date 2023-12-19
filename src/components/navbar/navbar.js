import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import "./navbar.scss";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="div-logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>

      <button className="hamburger">
        <img src={hamburgerMenu} alt="burger" className="hamburger-menu" />
      </button>
      <nav className="navbar-links">
        <NavLink to="/" className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="/experience" className="link">
          Experience
        </NavLink>
      </nav>
    </header>
  );
}
