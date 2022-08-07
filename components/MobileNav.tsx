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
  const [matchMenuBarColor, setMatchMenuBarColor] = useState<boolean>(false);

  const handleKebabClick = () => {
    setMatchMenuBarColor(!matchMenuBarColor);
    setNavExpand(!navExpand);
    setAnimateMenuIcon(true);
  };

  return (
    <Menu>
      <div className="bg-tan">
        <Menu.Button>
          <div
            className={`bg-tan mx-6 mt-4 rounded-full ${
              animateMenuIcon && "animate-menuIconOpen"
            }`}
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
      </div>
      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-100 opacity-0 -translate-x-60"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-100 opacity-0 translate-x-60 "
      >
        <div className="w-full h-screen text-tan flex:col mt-5">
          <Menu.Items>
            {navContent.map(({ path, title, icon }) => {
              return (
                <Menu.Item key={title}>
                  <div className="flex ml-5">
                    <span className="px-2 my-3">{icon}</span>
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
