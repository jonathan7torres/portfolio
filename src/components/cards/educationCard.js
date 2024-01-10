import React from "react";
import "./style/aboutCard.scss";
import "./style/educationCard.scss";

export default function EducationCard({ data }) {
  return (
    <div className="aboutCard">
      <span>
        <h2>{data.title}</h2>
      </span>
      <hr />
      <p>
        <span className="university">{data.university}</span>
        <span className="years">
          {data.year_started} - {data.year_graduated}
        </span>
      </p>
      <p>
        {data.degree_level}, {data.major}
      </p>
    </div>
  );
}
