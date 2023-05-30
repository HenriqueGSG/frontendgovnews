import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineHome } from "react-icons/ai";
import { RiGovernmentLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen);
  //   };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="fixed z-50 w-6 h-6 top-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-50 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 overflow-y-auto text-white bg-neutral-200 dark:bg-gray-800">
          <a href="/" className="flex items-center py-6 text-white">
            <img src={logo} className="w-10 h-10 " alt="Logo" />
            <span className="self-center text-2xl font-semibold text-black whitespace-nowrap font-merriweather">
              AthenaConnect
            </span>
          </a>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="absolute top-1 right-2 sm:hidden"
          >
            <AiFillCloseSquare size={24} />
          </button>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 bg-white rounded-md shadow-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiOutlineHome className="w-6 h-6 text-neutral-600" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/ministerios"
                className="flex items-center p-2 text-gray-900 bg-white rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <RiGovernmentLine className="w-6 h-6 text-neutral-600" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Ministérios
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="/assembleias"
                className="flex items-center p-2 text-gray-900 bg-white rounded-md shadow-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RiGovernmentLine className="w-6 h-6 text-neutral-600" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Assembleias
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="tribunais"
                className="flex items-center p-2 text-gray-900 bg-white rounded-md shadow-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RiGovernmentLine className="w-6 h-6 text-neutral-600" />
                <span className="flex-1 ml-3 whitespace-nowrap">Tribunais</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
