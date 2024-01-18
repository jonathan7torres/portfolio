import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import logoWhite from "../../assets/images/JT-white.png";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import "./navbar.scss";
import useDarkModeStore from "../../stores/darkModeStore";
import usePageStore from "../../stores/usePageStore";

export default function NavBar() {
  const [isExapnded, setIsExpanded] = useState(false);
  const { allPagesVisited } = usePageStore();
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  const onExpand = () => {
    setIsExpanded(!isExapnded);
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
      <NavLink to="/portfolio" className="brand-name">
        {darkMode ? (
          <img src={logoWhite} alt="logo" className="logo" />
        ) : (
          <img src={logo} alt="logo" className="logo" />
        )}
      </NavLink>
      {allPagesVisited && (
        <button
          onClick={toggleDarkMode}
          className={darkMode ? "button-dark" : "button-light"}
        >
          {darkMode ? "Return to the Light" : "Enter the dark side"}
        </button>
      )}

      <button className="hamburger" onClick={onExpand}>
        <img src={hamburgerMenu} alt="burger" className="hamburger-menu" />
      </button>
      <div
        className={isExapnded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <NavLink
              to="/porfolio"
              className={({ isActive }) => handleClassName(isActive, darkMode)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => handleClassName(isActive, darkMode)}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => handleClassName(isActive, darkMode)}
            >
              About
            </NavLink>
          </li>
        </ul>
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
