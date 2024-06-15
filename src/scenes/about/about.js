import React, { useEffect } from "react";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import "../style/screensStyle.scss";

export default function About({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <div>
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>About</h1>
    </div>
  );
}
