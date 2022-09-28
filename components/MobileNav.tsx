import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { navContent } from "../content/navContent";
import Link from "next/link";
import { GoKebabHorizontal } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import externalLinks from "../content/externalLinkContent";

interface IMoblieNavProps {
  navExpand: boolean;
  setNavExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<IMoblieNavProps> = ({ navExpand, setNavExpand }) => {
  const [animateMenuIcon, setAnimateMenuIcon] = useState<boolean>(false);
  const [matchMenuBarColor, setMatchMenuBarColor] = useState<boolean>(false);

  const handleKebabClick = () => {
    setMatchMenuBarColor(!matchMenuBarColor);
    setNavExpand(!navExpand);
    setAnimateMenuIcon(true);
  };

  return (
    <>
      <Menu>
        <div className="bg-tan">
          <Menu.Button aria-label="toggle nav bar">
            <div
              className={`bg-tan mx-6 mt-4 rounded-full ${
                animateMenuIcon && "animate-menuIconOpen"
              }`}
              onClick={handleKebabClick}
              onAnimationEnd={() => setAnimateMenuIcon(false)}
            >
              <GoKebabHorizontal size={36} />
            </div>
          </Menu.Button>
        </div>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-100 opacity-0 -translate-x-60"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-100 opacity-0 translate-x-60 "
        >
          <div className="w-full h-screen text-tan flex:col">
            <Menu.Items>
              {navContent.map(({ path, title, icon }) => {
                return (
                  <Menu.Item key={title}>
                    <div className="flex py-2 border-b-2 border-tan">
                      <span className="px-6 my-6">{icon}</span>
                      <Link href={path}>
                        <a className={`block m-2 text-6xl`}>{title}</a>
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
            <div className="flex text-tan mt-12 justify-center">
              <span className="m-4 text-tan">
                <Link href={externalLinks.linkedin}>
                  <a target="_blank">
                    <GrLinkedin size={100} />
                  </a>
                </Link>
              </span>
              <span className="m-4 text-tan">
                <Link href={externalLinks.github}>
                  <a target="_blank">
                    <GoMarkGithub size={100} />
                  </a>
                </Link>
              </span>
            </div>
            <div className="text-center bg-emerald mt-4 text-sm">
              <p>Alex Olivares Web Dev Porfolio</p>
            </div>
          </div>
        </Transition>
      </Menu>
    </>
  );
};

export default MobileNav;
