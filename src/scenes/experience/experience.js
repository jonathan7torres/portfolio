import React, { useEffect } from "react";
import ExperienceJson from "./experience.json";
import ExperienceCard from "../../components/cards/experienceCard";
import "./experience.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import Card from "../../components/cards/card";

export default function Experience({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section>
      <h1 className="screen-title">Experience</h1>
      {ExperienceJson.jobs.map((job) => (
        <Card key={job.id} children={<ExperienceCard job={job} />} />
      ))}
    </section>
  );
}
