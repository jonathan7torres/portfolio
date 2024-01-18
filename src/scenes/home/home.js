import React, { useEffect } from "react";
import "./home.scss";
import IntroTheater from "../../components/theater/introTheater";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";

export default function Home({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName, darkMode]);

  return (
    <section className="intro">
      <IntroTheater />
    </section>
  );
}
