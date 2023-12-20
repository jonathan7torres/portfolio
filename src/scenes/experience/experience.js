import React from "react";
import ExperienceJson from "./experience.json";
import ExperienceCard from "../../components/cards/experienceCard";
import "./experience.scss";

export default function Experience() {
  return (
    <section>
      <p className="title">Previous Roles</p>
      {ExperienceJson.jobs.map((job) => (
        <ExperienceCard props={job} key={job.id} />
      ))}
    </section>
  );
}
