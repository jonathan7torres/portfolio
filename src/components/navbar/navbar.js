import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import logoWhite from "../../assets/images/JT-white.png";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import hamburgerMenuWhite from "../../assets/images/hamburger-menu-white.png";
import "./navbar.scss";
import useDarkModeStore from "../../stores/darkModeStore";
import usePageStore from "../../stores/usePageStore";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import githubWhite from "../../assets/images/github-mark-white.png";
import gmail from "../../assets/images/gmail.png";
import resume from "../../assets/images/resume.png";
import resumeWhite from "../../assets/images/resume-white.png";
import resumePdf from "../../assets/files/JonathanTorresResume.pdf";

export default function NavBar() {
  const [isExapnded, setIsExpanded] = useState(false);
  const { allPagesVisited } = usePageStore();
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  const onExpand = () => {
    setIsExpanded(!isExapnded);
  };

  const onNavClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (darkMode) {
      AddDarkMode();
    } else {
      RemoveDarkMode();
    }

    setIsExpanded(false);
  }, [darkMode]);

  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        {darkMode ? (
          <img src={logoWhite} alt="logo" className="logo" />
        ) : (
          <img src={logo} alt="logo" className="logo" />
        )}
      </NavLink>
      <div
        className={isExapnded ? "navigation-menu expanded" : "navigation-menu"}
      >
        {allPagesVisited && (
          <button
            onClick={toggleDarkMode}
            className={darkMode ? "toggle-button dark" : "toggle-button"}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        )}
        <ul>
          <li className="nav-item">
            <img src={gmail} alt="linkedin" className="nav-image" />
          </li>
          <li className="nav-item">
            <img src={linkedin} alt="linkedin" className="nav-image" />
          </li>
          <li>
            <img src={githubWhite} alt="linkedin" className="nav-image" />
          </li>
          <li className="nav-item">
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">
              <img src={resumeWhite} alt="linkedin" className="nav-image" />
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={onExpand}>
          <img
            src={darkMode ? hamburgerMenuWhite : hamburgerMenu}
            alt="burger"
            className="hamburger-menu"
          />
        </button>
      </div>
    </nav>
  );
}

function handleClassName(isActive, darkMode) {
  let className = "link";
  if (isActive) {
    className += " active";
  }
  if (darkMode) {
    className += " dark";
  }

  return className;
}

function AddDarkMode() {
  var navigation = document.getElementsByClassName("navigation");
  navigation[0].classList.add("dark");

  const links = document.getElementsByClassName("link");
  [...links].forEach((element) => {
    element.classList.add("dark");
  });
}

function RemoveDarkMode() {
  var navigation = document.getElementsByClassName("navigation");
  navigation[0].classList.remove("dark");

  const links = document.getElementsByClassName("link");
  [...links].forEach((element) => {
    element.classList.remove("dark");
  });
}
