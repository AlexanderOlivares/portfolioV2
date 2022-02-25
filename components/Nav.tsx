import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  const navItems = [
    { path: "/", title: "Projects" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];
  return (
    <>
      <nav className="text-lg flex-col justify-center items-center text-center">
        {navItems.map(({ path, title }) => {
          return (
            <div className="p-3 py-5 my-3 hover:bg-slate-500">
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
