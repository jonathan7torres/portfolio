import React from "react";
import "./style/aboutCard.scss";

export default function EducationCard({ data }) {
  return (
    <div className="aboutCard">
      <span>
        <b>{data.title}</b>
      </span>
      <p>
        {data.university} {data.year_started} - {data.year_graduated}
      </p>
      <p>
        {data.degree_level}, {data.major}
      </p>
    </div>
  );
}
