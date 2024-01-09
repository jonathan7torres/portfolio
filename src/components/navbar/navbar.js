import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/JT.png";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import "./navbar.scss";

export default function NavBar() {
  const [isExapnded, setIsExpanded] = useState(false);

  const onExpand = () => {
    setIsExpanded(!isExapnded);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, []);

  return (
    <nav className="navigation">
      <NavLink to="/portfolio" className="brand-name">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <button className="hamburger" onClick={onExpand}>
        <img src={hamburgerMenu} alt="burger" className="hamburger-menu" />
      </button>
      <div
        className={isExapnded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={onExpand}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={onExpand}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={onExpand}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
