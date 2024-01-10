import React from "react";
import "./style/aboutCard.scss";

export default function EducationCard({ data }) {
  return (
    <div className="aboutCard">
      <span>
        <h2>{data.title}</h2>
        <hr />
      </span>
      <p>
        <span>{data.university}</span>
        <span>
          {data.year_started} - {data.year_graduated}
        </span>
      </p>
      <p>
        {data.degree_level}, {data.major}
      </p>
    </div>
  );
}
