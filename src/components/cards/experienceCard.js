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
        <p>{props.description}</p>
      </div>
    </div>
  );
}
