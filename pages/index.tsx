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
          <div className="h-screen w-full flex flex-wrap justify-center">
            <div className="md:w-1/2">
              <div className="bg-emerald h-1/2 text-tan">
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
            <div>
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
        <div className="md:p-2 md:ml-12">
          <div className="flex justify-center flex-wrap">
            {projectData.map(project => {
              return (
                <div
                  key={project.title}
                  className="w-full flex py-4 justify-center md:w-1/3 md:h-fit"
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
