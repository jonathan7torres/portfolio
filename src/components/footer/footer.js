import React from "react";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import logo from "../../assets/images/JT.png";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <section className="table">
        <div className="column">
          <p className="column-title">
            <b>Contact Me</b>
          </p>
          <ul>
            <li className="list-item">
              <a
                href="https://www.linkedin.com/in/jonathanatorres"
                target="_blank"
                rel="noreferrer"
                className="link-linkedin footer-link"
              >
                <img src={linkedin} alt="linkedin" className="image-linkedin" />
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://github.com/jonathan7torres/portfolio"
                target="_blank"
                rel="noreferrer"
                className="link-github footer-link"
              >
                <img src={github} alt="github" className="image-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <p className="column-title">
            <b>Other</b>
          </p>
          <ul>
            <li className="list-item">
              <NavLink to="/tech-stack" className="footer-link">
                Site Tech Stack
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/updates" className="footer-link">
                Site Updates
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <img src={logo} alt="log" className="footer-logo" />
      </div>
    </section>
  );
}
