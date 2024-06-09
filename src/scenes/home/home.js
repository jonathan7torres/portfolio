import React, { useEffect } from "react";
import "./home.scss";
import IntroTheater from "../../components/theater/introTheater";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";
import About from "../about/about";
import Photos from "../photos/photos.jsx";

export default function Home({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName, darkMode]);

  return (
    <div className="intro">
      <IntroTheater />
      <About />
      <Photos />
    </div>
  );
}
