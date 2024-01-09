import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./introTheater.scss";

export default function IntroTheater() {
  const el = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el.current, {
      strings: [
        "_Hi there!^1000",
        "_Hey!^1000",
        "_Hello!^1000",
        "_My name is Jonathan Torres, I am a<br>Software Engineer/ Front-end Developer<br> from Los Angeles, CA.^3000",
        "_Scroll down to<br> connect with me!^2000",
        "_My name is Jonathan Torres, I am a<br>Software Engineer/ Front-end Developer<br> from Los Angeles, CA.^3000",
      ],
      typeSpeed: 90,
      showCursor: false,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: 3,
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <div className="div-typed">
      <span ref={el} className="title-name" />
    </div>
  );
}
