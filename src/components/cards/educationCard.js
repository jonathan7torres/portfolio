import React from "react";
import "./style/educationCard.scss";

export default function EducationCard({ education }) {
  return (
    <div className="education-body">
      <div>
        <div className="education-university">{education.university}</div>
        <div className="education-period">{education.year_graduated}</div>
      </div>
      <div>
        {education.degree_level}, {education.major}
      </div>
    </div>
  );
}
