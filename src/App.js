import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./scenes/home/home";
import About from "./scenes/about/about";
import Experience from "./scenes/experience/experience";
import Footer from "./components/footer/footer";
import "./app.scss";
import usePageStore from "./stores/usePageStore";
import { useEffect } from "react";
import TechStack from "./scenes/techStack/techStack";
import Updates from "./scenes/updates/updates";

function App() {
  const { visitedPages, setAllPagesVisited } = usePageStore();

  useEffect(() => {
    if (
      visitedPages.length >= 3 &&
      visitedPages.includes("home", "experience", "about")
    ) {
      setAllPagesVisited();
    }
  }, [visitedPages, setAllPagesVisited]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Home pageName="home" />} />
        <Route path="/about" element={<About pageName="about" />} />
        <Route
          path="/experience"
          element={<Experience pageName="experience" />}
        />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
