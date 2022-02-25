import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

const IndexPage = () => {
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="relative min-h-screen md:flex">
          <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <a href="#" className="block p-4 text-white font-bold">
              Alex Olivares
            </a>
            <button className="mobile-menu-button p-4 focus:outline-none focus:bg-green-700">
              <svg
                className="h-5 w-5"
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
          </div>
          <div className="bg-red-400 w-32 pt-6 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out :hover-translate-w-40">
            <Nav />
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
