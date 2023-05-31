import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/merriweather"; // Importe a fonte Merriweather
import "./CardSmall.css";
const CardSmall = ({ lastNewsOrg, name, color, url, listOrgs, apiParam }) => {
  console.log(lastNewsOrg);
  const cards = () => {
    return Object.values(lastNewsOrg).map((news, index) => {
      const date = new Date(news.datetime * 1000);
      const formattedDate = date.toLocaleDateString("en-GB");
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return (
        <div
          className={`flex flex-col justify-start shadow-lg rounded ${color} dark:bg-gray-800 relative`}
          // className={`flex items-center justify-center h-24 rounded ${listColors[index]} dark:bg-gray-800`}
          key={index}
        >
          <div className="flex items-center justify-center h-24 px-2 text-lg text-center text-gray-100 shadow-sm dark:text-gray-500 font-merriweather">
            <p>{news.org}</p>
          </div>
          <a
            target="_blank"
            href={news.url}
            className="flex flex-col justify-between w-full h-full gap-2 p-3 text-center text-black bg-neutral-100"
          >
            <h2 className=" font-merriweather">{news.title}</h2>
            <span className=" bottom-1 right-1 text-neutral-500">
              {`${formattedDate} ${formattedTime}`}
            </span>
          </a>
        </div>
      );
    });
  };

  const orgsItems = () => {
    return Object.values(listOrgs).map((org, index) => {
      return (
        <Link
          to={`${apiParam}/${org}`}
          className={` min-w-fit  px-3 py-1 rounded-md text-white shadow-md ${color}`}
          style={{ whiteSpace: "nowrap" }}
        >
          {org}
        </Link>
      );
    });
  };

  return (
    <div className="relative p-4 text-black bg-white rounded-lg shadow-lg ">
      {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
      <div className="flex flex-col gap-4 ">
        <h1 className="w-full py-2 text-3xl font-semibold text-center border-b-2 sm:text-start font-merriweather">
          {name}
        </h1>
        <div className="grid grid-cols-1 gap-2 mb-4 md:grid-cols-2 lg:grid-cols-3">
          {cards()}
        </div>
        <div className="flex justify-center w-full ">
          <Link
            to={url}
            className={`text-center py-1 px-3 text-black rounded-md bg-neutral-100 w-fit  shadow-md  `}
          >
            Ver mais
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-merriweather ">Por instituição:</h3>
          <div className="flex flex-row items-center h-16 min-w-full gap-6 overflow-x-auto custom-scrollbar">
            {orgsItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
