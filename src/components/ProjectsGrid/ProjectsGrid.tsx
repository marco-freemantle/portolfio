import "./ProjectsGrid.css";
import MultiplayerShooter from "../../content/MultiplayerShooter.jpeg";
import BandBox from "../../content/BandBox.png";
import Iris from "../../content/Iris.png";
import CalorieTracker from "../../content/CalorieTracker.png";
import Tilt from "react-parallax-tilt";
import ShooterVideo from "../../content/ShooterVideo.mp4";
import RPGTestImage from "../../content/RPGTest.png";
import RPGTestVid from "../../content/RPGTest.mp4";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  videoSrc: string;
}

function ProjectCard({
  imageSrc,
  title,
  description,
  link,
  videoSrc,
}: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.025}
      transitionSpeed={2500}
      className="project-card"
    >
      <video className="project-card-video" controls poster={imageSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
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
      <h1 className="expertise-text">Things I'm Working On.</h1>
      <div className="row">
        <ProjectCard
          imageSrc={RPGTestImage}
          videoSrc={RPGTestVid}
          title="RPG Test"
          description="Experimenting with popular RPG mechanics for multiplayer games. Created in Unreal Engine 5 with C++."
          link="https://shorturl.at/cnstY"
        />
      </div>
      <div className="row">
        <ProjectCard
          imageSrc={MultiplayerShooter}
          videoSrc={ShooterVideo}
          title="Multiplayer Shooter"
          description="A fully networked multiplayer third-person shooter. Created in Unreal Engine 5 with C++."
          link="https://shorturl.at/cevxz"
        />
        <ProjectCard
          imageSrc={BandBox}
          videoSrc={"none"}
          title="BandBox"
          description="Comprehensive business management platform targeted at working musicians."
          link="https://shorturl.at/cnstY"
        />
      </div>
      <div className="row">
        <ProjectCard
          imageSrc={CalorieTracker}
          videoSrc={"none"}
          title="Calorie Tracker"
          description="Manage diet recommendations and monitor daily calorie intake and expenditure with ease."
          link="https://shorturl.at/bpNT0"
        />
        <ProjectCard
          imageSrc={Iris}
          videoSrc={"none"}
          title="Iris - Voice Assistant"
          description="Similar to the beloved Alexa but a lot worse!"
          link="https://shorturl.at/dAFS9"
        />
      </div>
    </div>
  );
}

export default ProjectsGrid;
