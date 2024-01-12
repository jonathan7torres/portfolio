import React from "react";
import "./style/card.scss";

export default function Card({ title, children }) {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <hr />
      {children}
    </div>
  );
}
