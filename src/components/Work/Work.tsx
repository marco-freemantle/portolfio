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
          My current project, 'Trym,' is a platform dedicated to empowering
          barbers in the UK. It facilitates seamless service marketing and
          booking management across web and mobile platforms. With extensive
          experience in scalable solutions, Trym offers tailored features to
          suit individual barbering needs. By providing actionable insights for
          business enhancement and leveraging cutting-edge technology, Trym aims
          to simplify the barber-client experience.
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
