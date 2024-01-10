import React, { useState } from "react";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import gmail from "../../assets/images/gmail.png";
import logo from "../../assets/images/JT.png";
import resume from "../../assets/images/resume.png";
import resumePdf from "../../assets/files/JonathanTorresResume.pdf";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [isDownloadButtonShowing, setIsDownloadButtonShowing] = useState(false);

  const onResumeClick = () => {
    setIsDownloadButtonShowing(!isDownloadButtonShowing);
  };

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
            <input
              type="image"
              src={resume}
              alt="resume"
              className="footer-image"
              onClick={onResumeClick}
            />
          </span>
          {isDownloadButtonShowing && (
            <span className="button-resume-download">
              <a
                href={resumePdf}
                download="JonathanTorresResume"
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download Resume
              </a>
            </span>
          )}
        </div>
        <div className="links-row">
          <div className="column column1">
            <NavLink to="/tech-stack" className="pages-link link-left">
              Tech Stack
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/updates" className="pages-link link-right">
              Site Updates
            </NavLink>
          </div>
        </div>
      </section>
      <div className="footer-div-logo">
        <img src={logo} alt="log" className="footer-logo" />
      </div>
    </section>
  );
}
