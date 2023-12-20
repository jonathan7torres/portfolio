import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./scenes/home/home";
import About from "./scenes/about/about";
import Experience from "./scenes/experience/experience";
import Footer from "./components/footer/footer";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tech-stack" element={<Experience />} />
        <Route path="/site-updates" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
