import "./App.css";
import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Expertise />
    </div>
  );
}

export default App;
