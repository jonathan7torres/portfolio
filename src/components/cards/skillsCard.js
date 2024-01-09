import React from "react";
import "./style/skillsCard.scss";

export default function SkillsCard({ data }) {
  const colors = ["#EFC7B7", "#BAB2B5", "#EEE2DC", "#123C69", "#AC3B61"];

  const getColor = () => {
    let num = Math.floor(Math.random() * colors.length);

    return colors[num];
  };

  return (
    <div className="aboutCard">
      <span>
        <b>{data.title}</b>
      </span>
      {data.sections_array?.map((section) => (
        <div key={section.id}>
          <span>{section.title}</span>
          <ul className="list">
            {section.skills.map((skills, i) => (
              <li
                className="list-item"
                style={{ "background-color": getColor(), color: "white" }}
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
