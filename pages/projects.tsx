import projectData from "../content/projectContent";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <div className="md:h-screen min-h-screen">
        <div className="text-center pt-1 md:p-4 lg:p-10" id="projects">
          <div className="text-6xl">Projects</div>
          <div className="text-xl pt-2 mt-4">Click thumbnails for porject info</div>
        </div>
        <div className="md:ml-12">
          <div className="flex justify-center flex-wrap">
            {projectData.map(project => {
              return (
                <div
                  key={project.title}
                  className="flex py-4 px-1 justify-center md:w-1/3 md:h-fit"
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
