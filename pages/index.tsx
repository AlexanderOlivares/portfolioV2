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

const IndexPage = () => {
  const isMediumScreen = useMediaQuery("(max-width:1250px)");
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
          <div className="h-screen w-full flex flex-wrap justify-evenly">
            <div className="md:w-1/3 flex justify-center">
              {/* <div className="text-center md:h-fit md:mt-24 rounded-lg"> */}
              <div className="md:h-fit md:mt-24 rounded-lg">
                <div className="text-center">
                  <span className="text-3xl">Hi I'm</span>
                </div>
                <div className="text-center">
                  <span className="text-5xl">Alex Olivares</span>
                </div>
                <div className="m-1">
                  <Image
                    className="rounded-xl"
                    src={headshot}
                    alt="alex olivares headshot"
                  />
                </div>
                <div className="text-center">
                  <p className="text-3xl m-auto">Web Developer</p>
                </div>
                <div className="flex justify-center">
                  <span className="m-2">
                    <GoMarkGithub size={28} />
                  </span>
                  <span className="m-2">
                    <GrLinkedin size={28} />
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="md:w-1/3 md:h-4/5 md:mt-24 bg-emerald text-tan rounded-md p-2"> */}
            <div className="md:w-1/3 -mt-36 md:h-1/2 md:mt-24 rounded-md">
              <div className="text-center">
                <span className="text-2xl">
                  I create web apps with these technologies
                </span>
              </div>
              <div className="flex flex-wrap justify-evenly">
                {skillIcons.map(Icon => {
                  return (
                    <span className="m-1 p-3 border-4 rounded-xl bg-emerald text-tan hover:bg-tan hover:border-4 hover:text-emerald hover:origin-top-left">
                      <Icon size={isMediumScreen ? 20 : 75} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:w-6 flex-col self-end content-end">
            <div className="text-1xl">P</div>
            <div className="text-1xl">R</div>
            <div className="text-1xl">O</div>
            <div className="text-1xl">J</div>
            <div className="text-1xl">E</div>
            <div className="text-1xl">C</div>
            <div className="text-1xl">T</div>
            <div className="text-1xl">S</div>
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
