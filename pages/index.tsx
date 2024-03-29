import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  GoChevronDown,
  GoCloudDownload,
  GoMarkGithub,
  GoLinkExternal,
  GoChevronUp,
} from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import Image from "next/image";
import headshot from "../public/images/headshot.jpeg";
import { skillIconNameLookup, skillIcons } from "../content/skillIcons";
import useMediaQuery from "../utils/UseMediaQuery";
import externalLinks from "../content/externalLinkContent";

const IndexPage = () => {
  const isWideScreen = useMediaQuery("(min-width:2000px)");
  const isMobile = useMediaQuery("(max-width:775px)");
  const [iconDisplayName, setIconDisplayName] = useState<string>(skillIconNameLookup[0]);

  const handleIconDisplayName = (index: number) => {
    setIconDisplayName(skillIconNameLookup[index + 1]);
  };

  function downloadPDF() {
    const pdfUrl = process.env.NEXT_PUBLIC_PORTFOLIO_LINK;
    window.open(pdfUrl, "_blank");
  }

  return (
    <>
      <Head>
        <title>Alex Olivares Portfolio</title>
        <meta property="og:title" content="Alex Olivares Web Dev Portfolio Homepage" key="title" />
        <meta name="description" content="Alex Olivares Web Dev Portfolio Homepage" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/52390834105_3f4a1fefd5_k.jpg"
        />
      </Head>
      <div className="relative md:flex">
        <div className="md:h-screen w-full flex flex-wrap justify-evenly content-center">
          <div className="h-full md:w-1/3 md:h-1/2">
            <div className="">
              <div className="text-center">
                <span className="text-4xl md:text-5xl">Hi, I'm</span>
              </div>
              <div className="text-center mt-1">
                <span className="text-5xl md:text-6xl">Alex Olivares</span>
              </div>
              <div className="m-1 drop-shadow-xl">
                <Image className="rounded-md" src={headshot} alt="alex olivares headshot" />
              </div>
              <div className="text-center mt-3">
                <p className="text-5xl md:text-6xl m-auto">Web Developer</p>
              </div>
              <div className="flex justify-center mt-1">
                <span className="m-4 shadow-2xl">
                  <Link href={externalLinks.github}>
                    <a aria-label="link to alex olivares github profile" target="_blank">
                      <GoMarkGithub size={50} />
                    </a>
                  </Link>
                </span>
                <span className="m-4 shadow-2xl shadow-emerald">
                  <Link href={externalLinks.linkedin}>
                    <a aria-label="link to alex olivares linkedin profile" target="_blank">
                      <GrLinkedin size={50} />
                    </a>
                  </Link>
                </span>
              </div>
              <div className="text-center mt-2">
                <button
                  onClick={downloadPDF}
                  aria-label="download alex olivares resume"
                  className="flex items-center shadow-2xl shadow-emerald text-xl m-auto p-2 bg-emerald text-tan rounded-md"
                >
                  Download my resume
                  <GoCloudDownload size={20} className="ml-3" />
                </button>
              </div>
              {isMobile && (
                <div className="text-center m-8">
                  <button
                    aria-label="scroll down"
                    className="flex items-center text-xl m-auto p-2 bg-emerald text-tan rounded-full"
                  >
                    <Link href="#skillIcons">
                      <a>
                        <GoChevronDown size={25} />
                      </a>
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div
            className={`h-fit pt-3 md:w-1/3 max-w-4xl shadow-2xl shadow-emerald md:h-fit md:p-1 bg-emerald text-tan ${
              !isMobile && "rounded-md"
            }`}
            id="skillIcons"
          >
            <div className="text-center">
              <span className="text-2xl md:text-3xl">I create web apps with</span>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl">{iconDisplayName}</span>
            </div>
            <div className="flex flex-wrap justify-evenly">
              {skillIcons.map((Icon, index) => {
                return (
                  <span
                    key={index}
                    className="m-1 p-2 border-2  bg-tan text-emerald hover:bg-emerald hover:border-3 hover:border-yellow hover:text-tan hover:origin-top-left"
                    onMouseEnter={() => handleIconDisplayName(index)}
                  >
                    <Icon size={isMobile ? 55 : isWideScreen ? 130 : 75} />
                  </span>
                );
              })}
            </div>
            <div className="p-3 text-center">
              <span className="text-2xl md:text-base">
                All of my projects were created for practical use and are actively used by myself
                and others. I enjoy creating websites that make life easier and more convenient.
              </span>
            </div>
            <div className="text-center mt-4">
              <Link href="/projects">
                <button
                  aria-label="view alex olivares web projects and code"
                  className="flex items-center text-xl m-auto mb-4 p-2  bg-emerald text-tan border hover:border-yellow  hover:text-yellow rounded-md"
                >
                  View my projects and code
                  <GoLinkExternal size={20} className="ml-3" />
                </button>
              </Link>
            </div>
            {isMobile && (
              <div className="text-center m-6 mb-8">
                <button
                  aria-label="scroll up"
                  className="flex items-center text-xl m-auto p-2 bg-tan text-emerald rounded-full"
                >
                  <Link href="/">
                    <a>
                      <GoChevronUp size={25} />
                    </a>
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
