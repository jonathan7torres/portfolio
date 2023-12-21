import React, { useEffect } from "react";
import "./home.scss";
import IntroTheater from "../../components/theater/introTheater";
import usePageStore from "../../stores/usePageStore";

export default function Home({ pageName }) {
  const { addVisitedPage, allPagesVisited } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="intro">
      {allPagesVisited && <div>All pages have been visted!</div>}

      <IntroTheater />
    </section>
  );
}
