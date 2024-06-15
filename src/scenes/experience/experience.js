import React, { useEffect } from "react";
import "./experience.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";

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
    </div>
  );
}
