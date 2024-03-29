import React from "react";
import ColorfulList from "../lists/colorfulList";
import "./style/skillsCard.scss";

export default function SkillsCard({ skillSections }) {
  return (
    <div className="skills-body">
      {skillSections?.map((section) => (
        <div key={section.id} className="skills-section">
          <div className="skills-subtitle">{section.title}:</div>
          {section.skills && <ColorfulList list={section.skills} />}
        </div>
      ))}
    </div>
  );
}
