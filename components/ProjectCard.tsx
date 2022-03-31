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
    <div className="border-none p-2 bg-emerald text-tan">
      <div className="text-lg lg:text-3xl m-auto">{project.title}</div>
      <div>
        <Image src={`${project.img}`} alt="me" width="345" height="194" />
      </div>
      <div className="flex">
        {project.Icons.map(icon => {
          return <span className="p-1">{icon}</span>;
        })}
      </div>
      <div className="">
        <span>
          <button className="border rounded-sm p-1 mr-2">View live site</button>
        </span>
        <span>
          <button className="border rounded-sm p-1 ml-2">View code</button>
        </span>
      </div>
    </div>
  );
};
export default ProjectCard;
