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
        {navContent.map(({ path, title, svg }) => {
          return (
            <>
              <div className="flex align-middle items-center hover:bg-slate-300">
                <span className="px-1 my-3 ">{svg}</span>
                <span
                  className={`${
                    navExpand ? "visible p-4 ease-in-out duration-700" : "invisible"
                  }`}
                >
                  <Link href={path}>
                    <a>{title}</a>
                  </Link>
                </span>
              </div>
            </>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
