import "./ProjectsGrid.css";
import TrymHome from "../../images/trym-website.png";
import MultiplayerShooter from "../../images/MultiplayerShooter.jpeg";
import BandBox from "../../images/BandBox.png";
import Iris from "../../images/Iris.png";
import CalorieTracker from "../../images/CalorieTracker.png";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ imageSrc, title, description, link }: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.025}
      transitionSpeed={2500}
      className="project-card"
    >
      <img src={imageSrc} alt={title} className="project-card-image" />
      <div className="project-title-description-container">
        <h2 className="project-card-title">{title}</h2>
        <a
          className="project-card-description"
          style={{ color: "#66c8e3" }}
          href={link}
        >
          {link}
        </a>
        <p className="project-card-description">{description}</p>
      </div>
    </Tilt>
  );
}

function ProjectsGrid() {
  return (
    <div className="projects-container">
      <div className="row">
        <ProjectCard
          imageSrc={TrymHome}
          title="Trym"
          description="Seamless service marketing and booking management across web and mobile platforms."
          link="https://mytrym.com/"
        />
        <ProjectCard
          imageSrc={BandBox}
          title="BandBox"
          description="Comprehensive business management platform targeted at working musicians."
          link="https://shorturl.at/cnstY"
        />
        <ProjectCard
          imageSrc={CalorieTracker}
          title="Calorie Tracker"
          description="Manage diet recommendations and monitor daily calorie intake and expenditure with ease."
          link="https://shorturl.at/bpNT0"
        />
      </div>
      <div className="row">
        <ProjectCard
          imageSrc={MultiplayerShooter}
          title="Multiplayer Shooter"
          description="A fully networked multiplayer third-person shooter. Created in Unreal Engine 5 with C++."
          link="https://shorturl.at/cevxz"
        />
        <ProjectCard
          imageSrc={Iris}
          title="Iris - Voice Assistant"
          description="Similar to the beloved Alexa but a lot worse!"
          link="https://shorturl.at/dAFS9"
        />
      </div>
    </div>
  );
}

export default ProjectsGrid;
