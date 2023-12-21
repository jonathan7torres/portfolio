import React, { useEffect, useState } from "react";
import about from "./about.json";
import usePageStore from "../../stores/usePageStore";

export default function About({ pageName }) {
  const [hobbies, setHobbies] = useState([]);
  const { addVisitedPage } = usePageStore();

  useEffect(() => {
    setHobbies(about.about[2]);
    addVisitedPage(pageName);
  }, [addVisitedPage, pageName]);

  return (
    <section>
      <h4>About Me</h4>
      <div>
        <h5>Education</h5>
      </div>
      <div>
        <h5>Skills</h5>
      </div>
      <div>
        <h5>Hobbies</h5>
      </div>
    </section>
  );
}
