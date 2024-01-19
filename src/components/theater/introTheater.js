import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./introTheater.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function IntroTheater() {
  const el = useRef(null);
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    let typed1 = undefined;
    if (darkMode) {
      AddDarkMode();
      typed1 = new Typed(el.current, {
        strings: [
          "Welcome to the dark side...^2000",
          "My name is Jonathan Torres, I am a Software Engineer/ Front-end Developer<br>from Los Angeles, CA.^3000",
        ],
        typeSpeed: 90,
        showCursor: false,
        backSpeed: 50,
        loop: true,
        loopCount: 3,
      });
    } else {
      RemoveDarkMode();
      typed1 = new Typed(el.current, {
        strings: [
          "Hi there!^1000",
          "Hey!^1000",
          "Hello!^1000",
          "My name is Jonathan Torres, I am a Software Engineer/ Front-end Developer<br>from Los Angeles, CA.^3000",
          "Scroll down to<br> connect with me!^2000",
          "My name is Jonathan Torres, I am a Software Engineer/ Front-end Developer<br>from Los Angeles, CA.^3000",
        ],
        typeSpeed: 90,
        showCursor: false,
        backSpeed: 50,
        loop: true,
        loopCount: 3,
      });
    }

    return () => {
      typed1.destroy();
    };
  }, [darkMode]);

  return (
    <div className="div-typed">
      <span ref={el} className="title-name" />
    </div>
  );
}

function AddDarkMode() {
  var navigation = document.getElementsByClassName("title-name");
  navigation[0].classList.add("dark");
}

function RemoveDarkMode() {
  var navigation = document.getElementsByClassName("title-name");
  navigation[0].classList.remove("dark");
}
