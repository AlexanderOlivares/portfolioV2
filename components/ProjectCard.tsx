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
    <div className="p-3 bg-emerald text-tan rounded-md">
      <div className="text-2xl mb-2 lg:text-3xl m-auto text-center">
        {project.title}
      </div>
      <div>
        <Image src={`${project.img}`} alt="me" width="345" height="194" />
      </div>
      <div className="flex m-2 justify-center">
        {project.Icons.map(icon => {
          return <span className="px-2">{icon}</span>;
        })}
      </div>
      <div className="text-center py-2">
        <span>
          <button className="border rounded-sm p-1 mr-2 text-2xl bg-tan text-emerald">
            View live site
          </button>
        </span>
        <span>
          <button className="border rounded-sm p-1 ml-2 text-2xl bg-tan text-emerald">
            View code
          </button>
        </span>
      </div>
    </div>
  );
};
export default ProjectCard;
