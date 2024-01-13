import React, { useEffect } from "react";
import "./home.scss";
import IntroTheater from "../../components/theater/introTheater";
import usePageStore from "../../stores/usePageStore";
import useDarkModeStore from "../../stores/darkModeStore";

export default function Home({ pageName }) {
  const { addVisitedPage } = usePageStore();
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      AddDarkMode();
    } else {
      RemoveDarkMode();
    }
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName, darkMode]);

  return (
    <section className="intro">
      <IntroTheater />
    </section>
  );
}

function AddDarkMode() {
  var navigation = document.getElementsByClassName("intro");
  navigation[0].classList.add("dark");
}

function RemoveDarkMode() {
  var navigation = document.getElementsByClassName("intro");
  navigation[0].classList.remove("dark");
}
