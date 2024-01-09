import React from "react";
import "./style/aboutCard.scss";

export default function AboutCard({ data }) {
  return <div className="aboutCard">{data.title}</div>;
}
