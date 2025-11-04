// import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Aurora from "./components/backgorunds/aurora";

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
      <Hero />
    </>
  );
}

export default App;
