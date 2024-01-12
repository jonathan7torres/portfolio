import React, { useEffect } from "react";
import "./updates.scss";
import "../style/screensStyle.scss";
import usePageStore from "../../stores/usePageStore";
import UpdatesJson from "./updates.json";
import Card from "../../components/cards/card";
import UpdatesCardBody from "../../components/cards/updatesCardBody";

export default function Updates({ pageName }) {
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section className="section-updates">
      <h1 className="screen-title">Updates</h1>
      {UpdatesJson.update_sections.map((section) => (
        <Card
          key={section.id}
          title={section.title}
          children={<UpdatesCardBody updates={section.updates} />}
        />
      ))}
    </section>
  );
}
