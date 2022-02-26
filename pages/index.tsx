import React, { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import MobileNav from "../components/mobileNav";

const IndexPage = () => {
  const [navExpand, setNavExpand] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const displayMobileNav = () => setShowMobileNav(!showMobileNav);

  const animateNav = () => {
    setTimeout(() => {
      setNavExpand(!navExpand);
    }, 200);
  };
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="relative min-h-screen md:flex">
          <div className="p-1 bg-zinc-500 text-gray-100 flex md:hidden">
            <button
              id="dropdownButton"
              className="mobile-menu-button p-4 focus:outline-none focus:bg-slate-300"
              data-dropdown-toggle="dropdown"
              type="button"
              onClick={displayMobileNav}
            >
              <svg
                className="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <a
              href="#"
              className="block p-4 text-3xl text-white font-bold justify-self-end"
            >
              Alex Olivares
            </a>
          </div>
          {showMobileNav && <MobileNav />}
          <div
            onMouseEnter={animateNav}
            onMouseLeave={() => setNavExpand(false)}
            className="hidden md:block md:bg-zinc-500 w-12 h-screen pt-6 absoulte inset-y-0 left-0 hover:w-40 ease-in-out duration-300"
          >
            <Nav navExpand={navExpand} />
          </div>
          <div className="flex-1 p-10 text-2x1">
            <p>Content</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
