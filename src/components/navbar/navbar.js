import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import "./navbar.scss";

export default function NavBar() {
  return (
    <section className="navbar">
      <div className="div-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/experience" className="link">
          Experience
        </Link>
      </div>
    </section>
  );
}
