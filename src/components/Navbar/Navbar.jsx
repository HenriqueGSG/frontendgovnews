import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div className="fixed top-0 z-40 w-full bg-neutral-900 sm:pl-56">
      <div className="p-2 ">
        <div className="flex items-center justify-center">
          <a href="/" className="flex items-center text-white">
            <img src={logo} className="w-10 h-10 mr-3 " alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AthenaConnect
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
