import React, { useState, useEffect } from "react";
import "./App.css";
import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import NewNavigationBar from "./components/NewNavigationBar/NewNavigationBar";
import Work from "./components/Work/Work";
import "overlayscrollbars/overlayscrollbars.css";
import Contact from "./components/Contact/Contact";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";

function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {scrollPosition > window.innerHeight / 2 ? (
        <NewNavigationBar /> // Render the new navigation bar if scrolled halfway down
      ) : (
        <Navigation />
      )}
      <Header />
      <Expertise />
      <Work />
      <ProjectsGrid />
      <Contact />
    </div>
  );
}

export default App;
