import "./App.css";
import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Work from "./components/Work/Work";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";

function App(): JSX.Element {
  return (
    <OverlayScrollbarsComponent
      element="span"
      options={{
        scrollbars: {
          autoHide: "scroll",
          theme: "os-theme-light",
        },
      }}
    >
      <div className="App">
        <Navigation />
        <Header />
        <Expertise />
        <Work />
        <ProjectsGrid />
      </div>
    </OverlayScrollbarsComponent>
  );
}

export default App;
