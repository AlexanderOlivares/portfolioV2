import React from "react";
import Link from "next/link";
import { navContent } from "../content/navContent";

interface INavProps {
  navExpand: boolean;
}

const Nav: React.FC<INavProps> = ({ navExpand }) => {
  return (
    <>
      <nav className="text-lg flex-col">
        {navContent.map(({ path, title, icon }) => {
          return (
            <div
              key={title}
              className="flex align-middle items-center hover:border-y-2 border-solid border-emerald"
            >
              <span className="px-2 my-4">{icon}</span>
              <span
                className={
                  navExpand ? "visible px-4 ease-in-out duration-700" : "invisible"
                }
              >
                <Link href={path}>
                  <a className="text-2xl">{title}</a>
                </Link>
              </span>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
