import "./Header.css";

function Header() {
  return (
    <div style={{ backgroundColor: "#131d26" }}>
      <div className="background-image">
        <div className="overlay-text">
          <p className="title-text">MARCO FREEMANTLE</p>
          <p className="subtitle-text">
            SOFTWARE ENGINEER, FULL-STACK & APP DEVELOPER.
          </p>
        </div>
      </div>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Header;
