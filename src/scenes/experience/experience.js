import React, { useEffect } from "react";
import ExperienceJson from "./experience.json";
import ExperienceCard from "../../components/cards/experienceCard";
import "./experience.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";

export default function Experience({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section>
      <h1 className="screen-title">Experience</h1>
      {ExperienceJson.jobs.map((job) => (
        <ExperienceCard props={job} key={job.id} />
      ))}
    </section>
  );
}
