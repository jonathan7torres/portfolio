import React, { useEffect } from "react";
import "./updates.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";

export default function Updates({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="section-updates">
      <h1 className="screen-title">Updates</h1>
      <div className="updates-container">
        <ul className="updates-list">
          <li>12/20/2023: Added Tech Stack and updates pages</li>
        </ul>
        <h3 className="title">Upcoming...</h3>
        <ul className="updates-list">
          <li>TBD: Hanlde mobile view</li>
        </ul>
      </div>
    </section>
  );
}
