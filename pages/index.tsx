import React, { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import ProjectCard from "../components/ProjectCard";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

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
        <div className="relative min-h-screen md:flex">
          <div className="md:hidden bg-emerald">
            <MobileNav navExpand={navExpand} setNavExpand={setNavExpand} />
          </div>
          <div
            onMouseEnter={animateNav}
            onMouseLeave={() => setNavExpand(false)}
            className="hidden md:block bg-emerald border-r-2 border-emerald w-12 h-screen pt-48 absoulte inset-y-0 left-0 hover:w-40 ease-in-out duration-300"
          >
            <Nav navExpand={navExpand} />
          </div>
          <div className="w-full h-screen">
            <div className="h-1/3 flex flex-wrap">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="bg-emerald w-64 h-64 rounded-full"></div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="">
                  <p className="text-6xl">Alex Olivares</p>
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
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
              <div className="w-full md:w-1/3 h-1/3">
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
