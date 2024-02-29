import "./ProjectsGrid.css";
import TrymHome from "../../images/trym-website.png";

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
          imageSrc="image2.jpg"
          title="Project 2"
          description="Description of Project 2"
        />
        <ProjectCard
          imageSrc="image3.jpg"
          title="Project 3"
          description="Description of Project 3"
        />
      </div>
      <div className="row">
        <ProjectCard
          imageSrc="image4.jpg"
          title="Project 4"
          description="Description of Project 4"
        />
        <ProjectCard
          imageSrc="image5.jpg"
          title="Project 5"
          description="Description of Project 5"
        />
      </div>
    </div>
  );
}

export default ProjectsGrid;
