import "./Work.css";
import TrymLogin from "../../images/trym-login.png";
import TrymHome from "../../images/trym-home.png";
import TrymSearch from "../../images/trym-search.png";
import Tilt from "react-parallax-tilt";

function Work() {
  return (
    <div className="work-container" id="work">
      <div className="work-title-description-container">
        <h1 className="work-title">Things I'm Working On.</h1>
        <p className="work-description">
          I'm currently working on 'Trym' - a platform dedicated to empowering
          barbers in the UK. It facilitates service marketing and will soon
          provide in-app booking management across web and mobile platforms.
          Trym offers tailored features to suit individual barbering needs. Trym
          is aimed at improving the barber-client experience by offering a
          platform that allows barbers to elevate their businesses.
        </p>
      </div>
      <div className="featured-project-container">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={2500}
        >
          <img src={TrymSearch} className="project-image-higher" alt="" />
        </Tilt>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={2500}
        >
          <img src={TrymLogin} className="project-image" alt="" />
        </Tilt>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={2500}
        >
          <img src={TrymHome} className="project-image-higher" alt="" />
        </Tilt>
      </div>
    </div>
  );
}

export default Work;
