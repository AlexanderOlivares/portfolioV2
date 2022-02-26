import React from "react";
import Link from "next/link";
import { navContent } from "../content/navContent";

const MobileNav: React.FC = () => {
  return (
    <>
      <div
        id="dropdown"
        className={
          "absolute z-10 w-44 text-base list-none divide-y divide-gray-100 shadow dark:bg-gray-700"
        }
      >
        <ul className="py-1">
          {navContent.map(({ path, title, svg }) => {
            return (
              <>
                <li key={path}>
                  <div className="flex align-middle items-center hover:bg-slate-300">
                    <span className="px-1 my-3">{svg}</span>
                    <span className="px-2 my-3">
                      <Link href={path}>
                        <a>{title}</a>
                      </Link>
                    </span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
