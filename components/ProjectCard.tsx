import React, { useState } from "react";
import Image from "next/image";
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
  const [description, setDescription] = useState<boolean>(true);
  const togglePhoto = () => {
    setTimeout(() => {
      setDescription(!description);
    }, 0);
  };
  return (
    <div className="p-3 bg-emerald text-tan rounded-md hover:bg-darkRed">
      <div className="text-2xl mb-2 lg:text-3xl m-auto text-center">
        {project.title}
      </div>
      <div
        onMouseEnter={togglePhoto}
        onMouseLeave={togglePhoto}
        className="w-96 h-52"
      >
        {description ? (
          <Image
            src={`${project.img}`}
            alt="Alex Olivares Headshot"
            width="384"
            height="208"
          />
        ) : (
          <Transition
            show={!description}
            enter="transition-opacity duration-2000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="bg-yellow w-96 h-52"
              //   className={`bg-yellow text-emerald w-96 h-52 ${
              //     description && "animate-showProjectDescription"
              //   }`}
            >
              alex aalkdjfalkjdlakjdflakjsflkj
            </div>
          </Transition>
        )}
      </div>
      <div className="flex m-2 justify-center">
        {project.Icons.map(icon => {
          return <span className="px-2">{icon}</span>;
        })}
      </div>
      <div className="text-center py-1">
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
