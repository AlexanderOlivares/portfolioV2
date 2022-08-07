import Link from "next/link";
import projectData from "../content/projectContent";
import { GoChevronUp } from "react-icons/go";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <div className="text-center mt-8" id="projects">
        <div className="text-6xl">Projects</div>
      </div>
      <div className="md:ml-12 h-full">
        <div className="flex justify-center flex-wrap">
          {projectData.map(project => {
            return (
              <div
                key={project.title}
                className="w-full flex py-4 px-1 justify-center md:w-1/3 md:h-fit"
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
          <div className="text-center m-6">
            <button className="flex items-center text-xl m-auto p-2 mb-4 bg-emerald text-tan rounded-full">
              <Link href="/">
                <a>
                  <GoChevronUp size={25} />
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
