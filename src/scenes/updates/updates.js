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
          <li>1/4/2024: Handled Navbar and footer mobile view</li>
        </ul>
        <h3 className="title">Upcoming...</h3>
        <ul className="updates-list">
          <li>TBD: Hanlde mobile view</li>
          <li>TBD: Update tech stack</li>
          <li>TBD: Refactor current HTML elements</li>
          <li>TBD: Refactor current CSS files</li>
          <li>
            TBD: Migrate Updates content to JSON and create resuable components
          </li>
          <li>TBD: Standardize card components</li>
          <li>TBD: Handle overflow of contents on smaller viewports</li>
        </ul>

        <h3 className="title">Current Known Bugs</h3>
        <ul className="updates-list">
          <li>
            - After visiting all pages, home screen intro no longer centered due
            to new component
          </li>
        </ul>
      </div>
    </section>
  );
}
