import React from "react";
import "./style/experienceCard.scss";
import ColorfulList from "../lists/colorfulList";

export default function ExperienceCard({ job }) {
  return (
    <div className="experience-body">
      <div className="div-experience-title">
        <span className="experience-title">{job.title}</span> -
        <span className="experience-company">{job.company}</span>
        <hr />
        <div className="experience-period">{job.period}</div>
        <p className="experience-description">{job.description}</p>
        {job.technologies && <ColorfulList list={job.technologies} />}
      </div>
    </div>
  );
}
