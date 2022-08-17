import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Alex Olivares Portfolio" }: Props) => {
  const [navExpand, setNavExpand] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-tan text-emerald overflow-y-auto">
        <div className="md:hidden bg-emerald">
          <MobileNav navExpand={navExpand} setNavExpand={setNavExpand} />
        </div>
        <div
          onMouseEnter={() => setTimeout(() => setNavExpand(true), 300)}
          onMouseLeave={() => setNavExpand(false)}
          className="hidden md:block fixed z-50 bg-emerald border-r-2 border-emerald w-12  pt-48 inset-y-0 left-0 hover:w-40 ease-in-out duration-300 hover:border-r-2 hover:border-tan"
        >
          <Nav navExpand={navExpand} />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
