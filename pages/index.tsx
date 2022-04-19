import React, { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import ProjectCard from "../components/ProjectCard";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import projectData from "../content/projectContent";
import Image from "next/image";
import headshot from "../public/images/headshot.jpeg";
import { skillIcons } from "../content/skillIcons";
import useMediaQuery from "../utils/UseMediaQuery";
import { GoChevronDown, GoCloudDownload } from "react-icons/go";

const IndexPage = () => {
  const isWideScreen = useMediaQuery("(min-width:2000px)");
  const isMobile = useMediaQuery("(max-width:775px)");
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
          <div className="md:h-screen w-full flex flex-wrap justify-evenly content-center">
            <div className="h-full md:w-1/3 md:h-1/2">
              <div className="h-screen">
                <div className="text-center">
                  <span className="text-4xl md:text-5xl">Hi, I'm</span>
                </div>
                <div className="text-center mt-1">
                  <span className="text-5xl md:text-6xl">Alex Olivares</span>
                </div>
                <div className="m-1">
                  <Image
                    className="rounded-md"
                    src={headshot}
                    alt="alex olivares headshot"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="text-5xl md:text-6xl m-auto">Web Developer</p>
                </div>
                <div className="flex justify-center mt-3">
                  <span className="m-4">
                    <GoMarkGithub size={50} />
                  </span>
                  <span className="m-4">
                    <GrLinkedin size={50} />
                  </span>
                </div>
                <div className="text-center mt-4">
                  <button className="flex items-center text-xl m-auto p-2 bg-emerald text-tan rounded-md">
                    Download my resume
                    <GoCloudDownload size={25} className="ml-3" />
                  </button>
                </div>
                {isMobile && (
                  <div className="text-center m-8">
                    <button className="flex items-center text-xl m-auto p-2 bg-emerald text-tan rounded-full">
                      <GoChevronDown size={25} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`h-fit pt-3 md:w-1/3 max-w-4xl md:h-fit md:p-1 bg-emerald text-tan ${
                !isMobile && "rounded-md"
              }`}
            >
              <div className="text-center">
                <span className="text-2xl md:text-3xl">I create web apps</span>
              </div>
              <div className="text-center">
                <span className="text-2xl md:text-3xl">with these technologies</span>
              </div>
              <div className="flex flex-wrap justify-evenly">
                {skillIcons.map(Icon => {
                  return (
                    <span className="m-1 p-2 border-4  bg-tan text-emerald hover:bg-emerald hover:border-4 hover:border-yellow hover:text-tan hover:origin-top-left">
                      <Icon size={isMobile ? 55 : isWideScreen ? 130 : 75} />
                    </span>
                  );
                })}
              </div>
              <div className="p-3 text-center">
                <span className="text-2xl md:text-base">
                  All of my projects were created for practical use and are actively
                  used by myself and others. I enjoy working on projects that make
                  life easier and more convienient.
                </span>
                {isMobile && (
                  <div className="text-center m-6">
                    <button className="flex items-center text-xl m-auto p-2 bg-tan text-emerald rounded-full">
                      <GoChevronDown size={25} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="md:w-6 flex-col self-end pb-5 content-end">
              <div className="text-1xl">P</div>
              <div className="text-1xl">R</div>
              <div className="text-1xl">O</div>
              <div className="text-1xl pl-0.5">J</div>
              <div className="text-1xl">E</div>
              <div className="text-1xl">C</div>
              <div className="text-1xl">T</div>
              <div className="text-1xl">S</div>
              <div className="text-1xl pt-3 pr-1">
                <GoChevronDown />
                <GoChevronDown />
                <GoChevronDown />
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-8">
          <div className="text-6xl md:text-8xl">Projects</div>
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
