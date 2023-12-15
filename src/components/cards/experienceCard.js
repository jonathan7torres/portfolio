import React from "react";
import "./style/experienceCard.scss";

export default function ExperienceCard({ props }) {
  return (
    <div className="card-experience">
      <div className="column1">
        <p className="card-company">{props.company}</p>
        <p className="card-title">{props.title}</p>
        <p className="card-period">{props.period}</p>
      </div>
      <div className="column2">
        <p className="card-subheader">Responsibilities:</p>
        <ul className="card-list">
          {props.reponsibilites.map((response) => (
            <li className="card-list-item">{response.reponsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
