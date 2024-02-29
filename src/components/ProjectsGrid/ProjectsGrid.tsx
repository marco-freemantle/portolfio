import "./ProjectsGrid.css";
import TrymHome from "../../images/trym-website.png";
import MultiplayerShooter from "../../images/MultiplayerShooter.jpeg";
import BandBox from "../../images/BandBox.png";
import Iris from "../../images/Iris.png";
import CalorieTracker from "../../images/CalorieTracker.png";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function ProjectCard({ imageSrc, title, description }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-card-image" />
      <div className="project-title-description-container">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="projects-container">
      <div className="row">
        <ProjectCard
          imageSrc={TrymHome}
          title="Trym"
          description="Trym facilitates seamless service marketing and booking management across web and mobile platforms."
        />
        <ProjectCard
          imageSrc={BandBox}
          title="BandBox"
          description="Comprehensive business management platform targeted at working musicians."
        />
        <ProjectCard
          imageSrc={CalorieTracker}
          title="Calorie Tracker"
          description="Intuitive app for managing diet recommendations and monitoring daily calorie intake and expenditure with ease."
        />
      </div>
      <div className="row">
        <ProjectCard
          imageSrc={MultiplayerShooter}
          title="Multiplayer Shooter"
          description="A fully networked multiplayer third-person shooter. Created in Unreal Engine 5 with C++."
        />
        <ProjectCard
          imageSrc={Iris}
          title="Iris - Voice Assistant"
          description="Similar to the beloved Alexa but a lot worse!"
        />
      </div>
    </div>
  );
}

export default ProjectsGrid;
