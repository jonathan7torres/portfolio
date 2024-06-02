import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./introTheater.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function IntroTheater() {
  const el = useRef(null);
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      AddDarkMode();
    } else {
      RemoveDarkMode();
    }

    const typed1 = new Typed(el.current, {
      strings: [
        "Hey!^1000",
        "Hi!^1000",
        "Hello!^1000",
        "My name is Jonathan Torres, I am a Software Developer<br>from Los Angeles, CA.^2000 <br> Scroll down to<br>find out more!",
      ],
      typeSpeed: 90,
      showCursor: false,
      backSpeed: 50,
      loop: false,
    });

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
