import React, { useEffect } from "react";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import "../style/screensStyle.scss";
import Photos from "../photos/photos.jsx";

export default function About({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <div>
      <h1 className={darkMode ? "screen-title dark" : "screen-title"}>
        About Me
      </h1>
      <h3>Favorite Travel Destinations</h3>
      <Photos />
    </div>
  );
}
