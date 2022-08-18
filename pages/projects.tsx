import projectData from "../content/projectContent";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Head from "next/head";
import useMediaQuery from "../utils/UseMediaQuery";
import { GoChevronUp } from "react-icons/go";

const ProjectsPage = () => {
  const isMobile = useMediaQuery("(max-width:775px)");

  return (
    <>
      <Head>
        <title>Web Projects - Alex Olivares Portfolio</title>
        <meta property="og:title" content="Alex Olivares Web Projects" key="title" />
        <meta
          name="description"
          content="Alex Olivares web projects and source code"
        />
      </Head>
      <div className="md:h-screen min-h-screen">
        <div className="text-center pt-1 md:p-4 lg:p-10" id="projects">
          <div className="text-6xl md:mt-6">Projects</div>
          <div className="text-xl pt-2 mt-4">Click thumbnails for project info</div>
        </div>
        <div className="md:ml-12">
          <div className="flex justify-center items-center min-h-screen md:pb-36 min-w-6/12 flex-wrap">
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
        {isMobile && (
          <div className="text-center m-6 mb-8">
            <button className="flex items-center text-xl m-auto p-2 bg-emerald text-tan rounded-full">
              <Link href="/projects">
                <a>
                  <GoChevronUp size={25} />
                </a>
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
