import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function NavBar() {
  return (
    <section className="navbar">
      <div className="logo">logo</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </section>
  );
}
