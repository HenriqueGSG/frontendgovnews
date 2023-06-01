import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineHome } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import DropdownButton from "../DropdownButton/DropdownButton";
import { useGetListOrgs } from "../../api/orgs";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const data = await queryClient.ensureQueryData({ queryKey, queryFn })
  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen);
  //   };

  const {
    isLoading: listOrgsLoading,
    isError: listOrgsError,
    data: listOrgsData,
  } = useGetListOrgs();

  if (listOrgsLoading) {
    return "loading";
  }

  if (listOrgsError) {
    return "An error has occurred: " + error.message;
  }
  console.log(listOrgsData);
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
        className={`fixed  top-0 left-0 z-50 h-screen max-w-56 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 overflow-y-auto text-white bg-neutral-200 dark:bg-gray-800">
          <Link to="/" className="flex items-center py-6 text-white">
            <img src={logo} className="w-10 h-10 " alt="Logo" />
            <span className="self-center text-2xl font-semibold text-black whitespace-nowrap font-merriweather">
              AthenaConnect
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="absolute top-1 right-2 sm:hidden"
          >
            <AiFillCloseSquare size={24} />
          </button>

          <ul className="space-y-2 font-medium">
            <div className="font-merriweather">
              <Link
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                to={"/"}
                className="flex items-center justify-start w-56 gap-2 px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <AiOutlineHome className="w-5 h-5" />
                Home
              </Link>
            </div>
            <DropdownButton
              data={listOrgsData}
              sidebarOpen={() => setSidebarOpen(!isSidebarOpen)}
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
