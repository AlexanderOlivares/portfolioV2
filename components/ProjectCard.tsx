import React from "react";
import Image from "next/image";

interface IProjectCardProps {
  project: {
    Icons: JSX.Element[];
    language: string;
    title: string;
    subHeader: string;
    img: string;
    repoUrl: string;
    demo: string;
    shortDescrip: string;
    longDescrip: string;
  };
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <div className="border-none">
      <div className="text-lg lg:text-3xl">{project.title}</div>
      <div>
        <Image src={`${project.img}`} alt="me" width="345" height="194" />
      </div>
      <div className="flex">
        <span>icons</span>
        <span>icons</span>
        <span>icons</span>
        <span>icons</span>
      </div>
      <div>
        <span>Live Site</span>
        <span>View Code</span>
      </div>
    </div>
  );
};
export default ProjectCard;
