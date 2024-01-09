import React from "react";
import "./style/experienceCard.scss";

export default function ExperienceCard({ props }) {
  return (
    <div className="card-experience">
      <div className="">
        <p className="card-company">{props.company}</p>
        <p className="card-title">{props.title}</p>
        <p className="card-period">{props.period}</p>
      </div>
      <div className="">
        <p className="">Responsibilities:</p>
        <ul className="card-list">
          {props.reponsibilites.map((responsibility) => (
            <li key={responsibility.id} className="card-list-item">
              {responsibility.reponsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
