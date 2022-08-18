import React from "react";
import Link from "next/link";
import { navContent } from "../content/navContent";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import externalLinks from "../content/externalLinkContent";

interface INavProps {
  navExpand: boolean;
}

const Nav: React.FC<INavProps> = ({ navExpand }) => {
  return (
    <>
      <nav className="text-lg flex-col text-tan">
        {navContent.map(({ path, title, icon }) => {
          return (
            <div
              key={title}
              className="flex cursor-pointer align-middle items-center border-y-2 border-emerald hover:border-y-2 border-solid hover:border-tan"
            >
              <Link href={path}>
                <a aria-label={title} className="px-2 my-4">
                  {icon}
                </a>
              </Link>
              <span
                className={
                  navExpand
                    ? "visible mx-4 ease-in-out duration-700"
                    : "invisible text-opacity-100"
                }
              >
                <Link href={path}>
                  <a aria-label={title} className="text-2xl">
                    {title}
                  </a>
                </Link>
              </span>
            </div>
          );
        })}
      </nav>
      {navExpand && (
        <div className="justify-center fixed inset-x-0 bottom-0">
          <div className="flex pl-2">
            <span className="m-4 text-tan">
              <Link href={externalLinks.github}>
                <a aria-label="link to alex olivares github profile" target="_blank">
                  <GoMarkGithub size={35} />
                </a>
              </Link>
            </span>
            <span className="m-4 text-tan">
              <Link href={externalLinks.linkedin}>
                <a
                  aria-label="link to alex olivares linkedin profile"
                  target="_blank"
                >
                  <GrLinkedin size={35} />
                </a>
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
