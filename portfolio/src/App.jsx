// import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "devicon/devicon.min.css";
import "devicon/devicon-base.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Aurora from "./components/backgorunds/aurora";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience/experience";

function App() {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#ff00ff", "#FF3232"]}
        blend={0.5}
        amplitude={1.5}
        speed={0.6}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
