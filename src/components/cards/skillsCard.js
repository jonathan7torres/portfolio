import React from "react";
import "./style/skillsCard.scss";
import ColorfulList from "../lists/colorfulList";

export default function SkillsCard({ data }) {
  return (
    <div className="aboutCard">
      <span>
        <h2>{data.title}</h2>
      </span>
      <hr />
      {data.sections_array?.map((section) => (
        <div key={section.id}>
          <span className="skills-subtitle">{section.title}</span>
          {section.skills && <ColorfulList list={section.skills} />}
        </div>
      ))}
    </div>
  );
}
