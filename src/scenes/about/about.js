import React, { useEffect, useState } from "react";
import about from "./about.json";

export default function About() {
  // const [isLoading, setIsLoading] = useState(false);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    console.log("onMount");
    setHobbies(about.about[2]);
  }, []);

  console.log(hobbies);

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
