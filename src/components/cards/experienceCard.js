import React from "react";
import "./style/experienceCard.scss";
import ColorfulList from "../lists/colorfulList";

export default function ExperienceCard({ job }) {
  return (
    <div className="experience-body">
      <div className="experience-subtitles">
        <div className="experience-company">{job.company}</div>
        <div className="experience-period">{job.period}</div>
      </div>
      <p className="experience-description">{job.description}</p>
      {job.technologies && <ColorfulList list={job.technologies} />}
    </div>
  );
}
