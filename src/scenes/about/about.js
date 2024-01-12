import React, { useEffect, useState } from "react";
import about from "./about.json";
import usePageStore from "../../stores/usePageStore";
import EducationCard from "../../components/cards/educationCard";
import SkillsCard from "../../components/cards/skillsCard";
import "../style/screensStyle.scss";
import Card from "../../components/cards/card";

export default function About({ pageName }) {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    setEducation(about.about[0]);
    setSkills(about.about[1]);
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section>
      <h1 className="screen-title">About</h1>
      <Card
        key={skills.id}
        title={skills.title}
        children={<SkillsCard skillSections={skills.sections} />}
      />
      <Card
        key={education.id}
        title={education.title}
        children={<EducationCard education={education} />}
      />
    </section>
  );
}
