import React, { useEffect } from "react";
import "./techStack.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import Card from "../../components/cards/card";
import TechStackCardBody from "../../components/cards/techStackCardBody";

export default function TechStack({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="body-tech-stack">
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>
        Tech Stack
      </h1>
      <div className={darkMode ? "tech-stack-div dark" : "tech-stack-div"}>
        <Card title="Tech" children={<TechStackCardBody />} />
      </div>
    </section>
  );
}
