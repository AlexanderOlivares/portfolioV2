import React, { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

const IndexPage = () => {
  const [navExpand, setNavExpand] = useState<boolean>(false);

  const animateNav = () => {
    setTimeout(() => {
      setNavExpand(!navExpand);
    }, 200);
  };

  return (
    <>
      <Layout title="Alex Olivares Portfolio">
        <div className="relative min-h-screen md:flex">
          <div className="p-1 bg-zinc-500 text-gray-100 flex md:hidden h-16">
            <MobileNav navExpand={navExpand} setNavExpand={setNavExpand} />
            <div className="relative text-3xl w-full text-center mt-2">
              Alex Olivares
            </div>
          </div>
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
