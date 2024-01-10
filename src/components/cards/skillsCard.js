import React from "react";
import "./style/skillsCard.scss";

export default function SkillsCard({ data }) {
  const colors = ["#ff8533", "#ff5050", "#668cff", "#40bf80", "#dd99ff"];

  const getColor = () => {
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
  };

  return (
    <div className="aboutCard">
      <span>
        <h2>{data.title}</h2>
      </span>
      <hr />
      {data.sections_array?.map((section) => (
        <div key={section.id}>
          <span className="skills-subtitle">{section.title}</span>
          <ul className="list">
            {section.skills.map((skills) => (
              <li
                className="list-item"
                style={{ backgroundColor: getColor(), color: "white" }}
                key={skills.item_id}
              >
                {skills.item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
