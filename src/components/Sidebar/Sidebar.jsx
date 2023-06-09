import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineHome } from "react-icons/ai";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import DropdownButton from "../DropdownButton/DropdownButton";
import { useGetListOrgs } from "../../api/orgs";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="fixed z-50 sm:w-14 sm:h-full sm:bg-white">
      {!isSidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute inline-flex items-center p-2 text-sm text-white rounded-lg bg-gold top-3 left-2 hover:bg-blueMiddle focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <RxHamburgerMenu size={20} />
        </button>
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-50 h-screen max-w-60 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="relative h-full px-3 py-16 overflow-y-auto text-black bg-white dark:bg-gray-800">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute inline-flex items-center p-2 text-sm text-white rounded-lg bg-gold top-3 hover:bg-blueMiddle left-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <BsArrowBarLeft size={20} />
          </button>
          <Link to="/" className="flex items-center mb-5 ">
            <img src={logo} className="w-10 h-10 " alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-merriweather">
              AthenaConnect
            </span>
          </Link>

          <ul className="space-y-2 font-medium">
            <div className="font-merriweather">
              <Link
                onClick={() => setSidebarOpen(false)}
                to={"/"}
                className={`flex items-center justify-start w-60 gap-2 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-blueMiddle ring-1 ring-inset ring-gray-300 hover:bg-blueMiddle`}
              >
                <AiOutlineHome className="w-5 h-5" />
                Home
              </Link>
            </div>
            <DropdownButton
              data={listOrgsData}
              sidebarOpen={() => setSidebarOpen(false)}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
