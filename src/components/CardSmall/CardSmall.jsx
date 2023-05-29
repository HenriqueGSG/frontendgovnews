import React from "react";
import { Link } from "react-router-dom";

const CardSmall = ({ listOrgs, name, color, url }) => {
  console.log(listOrgs);
  const cards = () => {
    return Object.values(listOrgs).map((news, index) => {
      const date = new Date(news.datetime * 1000);
      const formattedDate = date.toLocaleDateString("en-GB");
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return (
        <div
          className={`flex flex-col justify-start rounded ${color} dark:bg-gray-800 relative`}
          // className={`flex items-center justify-center h-24 rounded ${listColors[index]} dark:bg-gray-800`}
          key={index}
        >
          <div className="flex items-center justify-center h-24 px-2 text-lg font-semibold text-center text-gray-100 shadow-sm dark:text-gray-500">
            <p>{news.org}</p>
          </div>
          <a
            target="_blank"
            href={news.url}
            className="flex flex-col justify-between w-full h-full gap-2 p-3 text-center text-white bg-neutral-800"
          >
            <h2>{news.title}</h2>
            <span className=" bottom-1 right-1 text-neutral-400">
              {`${formattedDate} ${formattedTime}`}
            </span>
          </a>
        </div>
      );
    });
  };

  //   const cards = () => {
  //     return Object.values(listOrgs).map((org, index) => (
  //       <div
  //         className={`flex flex-col  justify-start rounded ${color} dark:bg-gray-800`}
  //         // className={`flex items-center justify-center h-24 rounded ${listColors[index]} dark:bg-gray-800`}
  //       >
  //         <p className="px-2 text-lg font-bold text-center text-gray-100 shadow-sm dark:text-gray-500">
  //           {org}
  //         </p>
  //         <div className="flex flex-col w-full h-full gap-2 p-3 text-center text-white bg-neutral-800">
  //           <h2 className="">a</h2>
  //         </div>
  //       </div>
  //     ));
  //   };

  return (
    <div className="relative p-4 rounded-lg bg-neutral-900">
      {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
      <div className="flex flex-col gap-3 ">
        <h1 className="w-full text-3xl text-white ">{name}</h1>
        <div className="grid grid-cols-1 gap-2 mb-4 md:grid-cols-2 lg:grid-cols-3">
          {cards()}
        </div>
        <div className="flex justify-center w-full ">
          <Link
            to={url}
            className={`text-center py-1 px-3 text-white rounded-md bg-neutral-800 w-fit hover:bg-white hover:text-black `}
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
