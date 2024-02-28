import React, { ReactNode } from "react";
import "./Expertise.css";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";
import CodeChallenge from "../CodeChallenge/CodeChallenge";
import Tilt from "react-parallax-tilt";

interface ExpertiseBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ExpertiseBox: React.FC<ExpertiseBoxProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={2500}
      perspective={500}
      className="expertise-box"
    >
      <div className="inner-element">
        <div style={{ marginBottom: 15 }}>{icon}</div>
        <h2 className="box-title">{title}</h2>
        <div className="box-description-container">
          <div className="description-line" />
          <p className="box-description">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

function Expertise() {
  return (
    <div className="expertise-container">
      <h1 className="expertise-text">My Expertise</h1>
      <div className="expertise-boxes">
        <ExpertiseBox
          icon={<HiOutlineComputerDesktop size={40} color="#66a9f1" />}
          title="Sofware Development"
          description="Experienced in both functional and OOP programming languages: TypeScript, Javascript, Python, C#, Java"
        />
        <ExpertiseBox
          icon={<FaReact size={40} color="#66a9f1" />}
          title="Full-stack React Dev"
          description="Passionate about full-stack development. Proficient with HTML, CSS, JS, Typescript, React, Firebase."
        />
        <ExpertiseBox
          icon={<CiMobile4 size={40} color="#66a9f1" />}
          title="React Native Dev"
          description="Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework."
        />
        <ExpertiseBox
          icon={<FaGamepad size={40} color="#66a9f1" />}
          title="Game Development"
          description="Skilled in Unreal Engine. Enjoys creating immersive visual experiences and exploring new game mechanics as a hobby."
        />
      </div>
      <CodeChallenge />
    </div>
  );
}

export default Expertise;
