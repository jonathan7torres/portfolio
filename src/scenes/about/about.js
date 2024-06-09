import React, { useEffect, useState } from "react";
import about from "./about.json";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import EducationCard from "../../components/cards/educationCard";
import SkillsCard from "../../components/cards/skillsCard";
import "../style/screensStyle.scss";
import Card from "../../components/cards/card";

export default function About({ pageName }) {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    setEducation(about.about[0]);
    setSkills(about.about[1]);
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <div>
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>About</h1>
      <Card
        key={education.id}
        title={education.title}
        children={<EducationCard education={education} />}
      />
      <Card
        key={skills.id}
        title={skills.title}
        children={<SkillsCard skillSections={skills.sections} />}
      />
    </div>
  );
}
