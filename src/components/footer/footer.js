import React, { useEffect, useState } from "react";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import githubWhite from "../../assets/images/github-mark-white.png";
import gmail from "../../assets/images/gmail.png";
import logo from "../../assets/images/JT.png";
import logoWhite from "../../assets/images/JT-white.png";
import resume from "../../assets/images/resume.png";
import resumeWhite from "../../assets/images/resume-white.png";
import resumePdf from "../../assets/files/JonathanTorresResume.pdf";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import useDarkModeStore from "../../stores/darkModeStore";

export default function Footer() {
  const [isDownloadButtonShowing, setIsDownloadButtonShowing] = useState(false);
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      AddDarkMode();
    } else {
      RemoveDarkMode();
    }
  }, [darkMode]);

  const onResumeClick = () => {
    setIsDownloadButtonShowing(!isDownloadButtonShowing);
  };

  return (
    <section className="footer">
      {darkMode ? <></> : <hr />}

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
            {darkMode ? (
              <img src={githubWhite} alt="github" className="footer-image" />
            ) : (
              <img src={github} alt="github" className="footer-image" />
            )}
          </a>
          <span className="footer-link">
            {darkMode ? (
              <input
                type="image"
                src={resumeWhite}
                alt="resume"
                className="footer-image"
                onClick={onResumeClick}
              />
            ) : (
              <input
                type="image"
                src={resume}
                alt="resume"
                className="footer-image"
                onClick={onResumeClick}
              />
            )}
          </span>
          {isDownloadButtonShowing && (
            <span
              className={
                darkMode
                  ? "button-resume-download dark-button"
                  : "button-resume-download"
              }
            >
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
            <NavLink
              to="/tech-stack"
              className={
                darkMode ? "pages-link link-left dark" : "pages-link link-left"
              }
            >
              Tech Stack
            </NavLink>
          </div>
          <div className="column">
            <NavLink
              to="/updates"
              className={
                darkMode
                  ? "pages-link link-right dark"
                  : "pages-link link-right"
              }
            >
              Site Updates
            </NavLink>
          </div>
        </div>
      </section>
      <div className="footer-div-logo">
        {darkMode ? (
          <img src={logoWhite} alt="logo" className="footer-logo" />
        ) : (
          <img src={logo} alt="logo" className="footer-logo" />
        )}
      </div>
    </section>
  );
}

function AddDarkMode() {
  var navigation = document.getElementsByClassName("footer");
  navigation[0].classList.add("dark");

  const links = document.getElementsByClassName("pages-link");
  [...links].forEach((element) => {
    element.classList.add("dark");
  });
}

function RemoveDarkMode() {
  var navigation = document.getElementsByClassName("footer");
  navigation[0].classList.remove("dark");

  const links = document.getElementsByClassName("pages-link");
  [...links].forEach((element) => {
    element.classList.remove("dark");
  });
}
