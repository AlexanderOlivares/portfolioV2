import React from "react";
import ChallengeSiteCard from "../components/ChallengeSiteCard";
import challengeSiteConent from "../content/challengSitesContent";
import Head from "next/head";
import Link from "next/link";
import { GoChevronUp } from "react-icons/go";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills - Alex Olivares Porfolio</title>
        <meta
          property="og:title"
          content="Web Dev Skills - Alex Olivares"
          key="title"
        />
        <meta
          name="description"
          content="Alex Olivares web development skills page"
        />
      </Head>
      <div className="md:h-screen min-h-screen">
        <div className="text-center pt-1 md:p-4 lg:p-10" id="skils">
          <div className="text-6xl md:mt-6">Back-end skills</div>
        </div>
        <div className="md:ml-12 bg-tan">
          <div className="flex justify-center items-center min-h-screen md:pb-36 min-w-6/12 flex-wrap">
            {challengeSiteConent.map(site => {
              return (
                <div
                  key={site.site}
                  className="flex py-4 px-1 justify-center md:w-1/2 md:h-fit"
                >
                  <ChallengeSiteCard site={site} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center pt-1 md:p-4 lg:p-10 bg-emerald text-tan">
          <div className="text-6xl md:mt-6">Front-end skills</div>
        </div>
        <div className="md:ml-12 bg-emerald text-tan">
          <div className="flex justify-center items-center min-h-screen md:pb-36 min-w-6/12 flex-wrap">
            {challengeSiteConent.map(site => {
              return (
                <div
                  key={site.site}
                  className="flex py-4 px-1 justify-center md:w-1/2 md:h-fit"
                >
                  <ChallengeSiteCard site={site} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center text-2xl pt-2 mt-4">Problem Solving</div>
        <div className="md:ml-12 bg-tan text-emerald">
          <div className="flex justify-center items-center min-h-screen md:pb-36 min-w-6/12 flex-wrap">
            {challengeSiteConent.map(site => {
              return (
                <div
                  key={site.site}
                  className="flex py-4 px-1 justify-center md:w-1/2 md:h-fit"
                >
                  <ChallengeSiteCard site={site} />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="text-center m-6 mb-8">
          <button className="flex items-center text-xl m-auto p-2 bg-emerald text-tan rounded-full">
            <Link href="/skills">
              <a>
                <GoChevronUp size={25} />
              </a>
            </Link>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Skills;
