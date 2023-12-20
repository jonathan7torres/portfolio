import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./introTheater.scss";

export default function IntroTheater() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el.current, {
      strings: [
        "Welcome!^5000",
        "My name is Jonathan Torres<br>and I am a Software Engineer.",
      ],
      typeSpeed: 90,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed1.destroy();
    };
  }, []);

  return (
    <div className="div-typed">
      <span ref={el} className="title-name" />
    </div>
  );
}
