import React from "react";
import "./style/card.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function Card({ title, children }) {
  const { darkMode } = useDarkModeStore();

  return (
    <div className={darkMode ? "card-container dark" : "card-container"}>
      <div className="card-title ">{title}</div>
      <hr />
      {children}
    </div>
  );
}
