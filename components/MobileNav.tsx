import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { navContent } from "../content/navContent";
import Link from "next/link";
import { GoKebabHorizontal, GoKebabVertical } from "react-icons/go";

interface IMoblieNavProps {
  navExpand: boolean;
  setNavExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<IMoblieNavProps> = ({ navExpand, setNavExpand }) => {
  const [animateMenuIcon, setAnimateMenuIcon] = useState<boolean>(false);
  console.log(navExpand);
  const handleKebabClick = () => {
    setNavExpand(!navExpand);
    setAnimateMenuIcon(true);
  };

  return (
    <Menu>
      <Menu.Button>
        <div
          className={`mx-4 mt-4 -mb-3 ${animateMenuIcon && "animate-menuIconOpen"}`}
          onClick={handleKebabClick}
          onAnimationEnd={() => setAnimateMenuIcon(false)}
        >
          {navExpand ? (
            <GoKebabVertical size={36} />
          ) : (
            <GoKebabHorizontal size={36} />
          )}
        </div>
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="w-full h-screen bg-emerald text-tan rounded-md">
          <Menu.Items>
            {navContent.map(({ path, title, icon }) => {
              return (
                <Menu.Item key={title}>
                  <div className="w-3/4 h-1/6 flex my-5 align-middle items-center hover:bg-slate-300">
                    <span className="px-2 my-3 ">{icon}</span>
                    <Link href={path}>
                      <a className={`block m-2 text-5xl`}>{title}</a>
                    </Link>
                  </div>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  );
};

export default MobileNav;
