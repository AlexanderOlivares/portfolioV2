import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

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
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const togglePhoto = () => setShowDescription(!showDescription);

  return (
    <div className="py-3 bg-emerald text-tan shadow-2xl rounded-md">
      <div className="text-2xl mb-2 lg:text-3xl m-auto text-center">
        {project.title}
      </div>
      <div onClick={togglePhoto} className="w-96 h-52 cursor-pointer ">
        <div
          className={`bg-tan text-emerald  w-96 h-52  ${
            showDescription && "overflow-y-auto"
          }`}
        >
          {!showDescription && (
            <Image src={project.img} alt={project.title} width="384" height="208" />
          )}
          <Transition
            show={showDescription}
            enter="transform transition duration-[100ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform scale-100"
            leaveFrom="opacity-0 rotate-0 scale-50"
            leaveTo="opacity-0 scale-0"
          >
            <div className="p-2 ">{project.longDescrip}</div>
          </Transition>
        </div>
      </div>
      <div className="flex m-2 justify-center">
        {project.Icons.map(icon => {
          return <span className="px-2">{icon}</span>;
        })}
      </div>
      <div className="text-center py-1">
        <span>
          <Link href={project.demo}>
            <a target="_blank">
              <button className="border rounded-md p-2 ml-2 text-2xl bg-tan text-emerald">
                View live site
              </button>
            </a>
          </Link>
        </span>
        <span>
          <Link href={project.repoUrl}>
            <a target="_blank">
              <button className="border rounded-md p-2 ml-2 text-2xl bg-tan text-emerald">
                View code
              </button>
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default ProjectCard;
