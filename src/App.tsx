import "./App.css";
import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

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
      </div>
    </OverlayScrollbarsComponent>
  );
}

export default App;
