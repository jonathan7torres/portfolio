import React, { useEffect } from "react";
import ExperienceJson from "./experience.json";
import ExperienceCard from "../../components/cards/experienceCard";
import "./experience.scss";
import usePageStore from "../../stores/usePageStore";

export default function Experience({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section>
      <p className="title">Previous Roles</p>
      {ExperienceJson.jobs.map((job) => (
        <ExperienceCard props={job} key={job.id} />
      ))}
    </section>
  );
}
