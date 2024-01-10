import React, { useEffect } from "react";
import "./techStack.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";

export default function TechStack({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="body-tech-stack">
      <h1 className="screen-title">Tech Stack</h1>
      <div>
        <div>Tech Stack Comming Soon...</div>
      </div>
    </section>
  );
}
