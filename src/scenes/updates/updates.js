import React, { useEffect } from "react";
import "./updates.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";

export default function Updates({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="section-updates">
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>
        Updates
      </h1>
    </section>
  );
}
