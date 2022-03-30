import React, { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import ProjectCard from "../components/ProjectCard";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import projectData from "../content/projectContent";

const IndexPage = () => {
  const [navExpand, setNavExpand] = useState<boolean>(false);

  const animateNav = () => {
    setTimeout(() => {
      setNavExpand(!navExpand);
    }, 200);
  };

  return (
    <>
      <Layout title="Alex Olivares Portfolio">
        {/* <div className="relative min-h-screen md:flex"> */}
        <div className="relative md:flex">
          <div className="md:hidden bg-emerald">
            <MobileNav navExpand={navExpand} setNavExpand={setNavExpand} />
          </div>
          <div
            onMouseEnter={animateNav}
            onMouseLeave={() => setNavExpand(false)}
            className="hidden md:block fixed z-50 bg-emerald border-r-2 border-emerald w-12 h-screen pt-48 inset-y-0 left-0 hover:w-40 ease-in-out duration-300"
          >
            <Nav navExpand={navExpand} />
          </div>
          <div className="w-full h-screen md:h-1/2 flex flex-wrap justify-evenly">
            {/* <div className="w-full h-screen md:h-1/2 flex"> */}
            <div className="justify-center md:flex">
              <div className="w-full p-2 md:w-1/2 flex justify-center items-center">
                <div className="bg-emerald w-48 h-48 rounded-full"></div>
              </div>
              <div className="w-full p-3 flex flex-col justify-center align-center items-center">
                <div className="">
                  <p className="text-5xl">Alex Olivares</p>
                </div>
                <div className="">
                  <p className="text-3xl">Web Developer</p>
                </div>
                <div className="flex">
                  <span className="m-2">
                    <GoMarkGithub size={28} />
                  </span>
                  <span className="m-2">
                    <GrLinkedin size={28} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-2 md:ml-12">
          <div className="flex justify-center flex-wrap">
            {projectData.map(project => {
              return (
                <div
                  key={project.title}
                  className="w-full flex justify-center md:w-1/3 md:h-fit"
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
