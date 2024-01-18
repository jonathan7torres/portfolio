import React, { useEffect } from "react";
import ExperienceJson from "./experience.json";
import ExperienceCard from "../../components/cards/experienceCard";
import "./experience.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import Card from "../../components/cards/card";

export default function Experience({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <div>
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>
        Experience
      </h1>
      {ExperienceJson.jobs.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          children={<ExperienceCard job={job} />}
        />
      ))}
    </div>
  );
}
