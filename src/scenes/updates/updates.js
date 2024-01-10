import React, { useEffect } from "react";
import "./updates.scss";
import usePageStore from "../../stores/usePageStore";

export default function Updates({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="section-updates">
      <div className="updates-container">
        <h3 className="title">Updates</h3>
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
