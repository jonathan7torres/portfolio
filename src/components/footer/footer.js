import React from "react";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import gmail from "../../assets/images/gmail.png";
import logo from "../../assets/images/JT.png";
import resume from "../../assets/images/resume.png";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <hr />
      <section className="table">
        <div className="profiles-row">
          <a href="mailto:jon7torres@gmail.com" className="footer-link">
            <img src={gmail} alt="gmail" className="footer-image" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanatorres"
            target="_blank"
            rel="noreferrer"
            className="link-linkedin footer-link"
          >
            <img src={linkedin} alt="linkedin" className="footer-image" />
          </a>
          <a
            href="https://github.com/jonathan7torres/portfolio"
            target="_blank"
            rel="noreferrer"
            className="link-github footer-link"
          >
            <img src={github} alt="github" className="footer-image" />
          </a>
          <span className="footer-link">
            <img src={resume} alt="resume" className="footer-image" />
          </span>
        </div>
        <div className="links-row">
          <NavLink to="/updates" className="footer-link">
            Site Updates
          </NavLink>
          <span className="footer-links-divder">|</span>
          <NavLink to="/tech-stack" className="footer-link">
            Tech Stack
          </NavLink>
        </div>
      </section>
      <div className="footer-div-logo">
        <img src={logo} alt="log" className="footer-logo" />
      </div>
    </section>
  );
}
