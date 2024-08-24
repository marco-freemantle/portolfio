import "./Header.css";

function Header() {
  return (
    <div id="home" className="header-container">
      <div className="background-image">
        <div className="overlay-text">
          <p className="hello-text">Hi, my name is</p>
          <p className="title-text">Marco.</p>
          <p className="subtitle-text">I build things for the internet.</p>
          {window.innerWidth > 1200 && (
            <p className="description">
              I build performant applications that solve real-world problems and
              provide users with an incredible experience.
            </p>
          )}
        </div>
      </div>
      {window.innerWidth >= 1000 && (
        <div
          className="arrow-container"
          onClick={() => {
            const element = document.getElementById("expertise");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="arrow"></div>
        </div>
      )}
    </div>
  );
}

export default Header;
