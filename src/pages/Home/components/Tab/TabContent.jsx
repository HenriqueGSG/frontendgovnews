import React from "react";
import { Link } from "react-router-dom";
const TabContent = ({ data }) => {
  const convertDatetime = (dateToConvert) => {
    const date = new Date(dateToConvert * 1000);
    const formattedDate = date.toLocaleDateString("en-GB");
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${formattedDate} ${formattedTime}`;
  };
  return (
    <div className="grid h-full grid-cols-1 py-2 text-center gap-y-5 lg:gap-y-3 lg:grid-cols-2 lg:text-start ">
      {data.map((item) => (
        <div key={item._id} className="">
          <div className="w-full px-2 py-1 text-base font-semibold text-center text-white rounded-lg shadow bg-blueLight lg:w-fit">
            <Link to={`${item.tipo}/${item.org}`} className="">
              {item.org}
            </Link>
          </div>
          <div className="flex flex-col max-w-2xl gap-2 px-3 py-2">
            <span className="font-sans text-xs text-neutral-500">
              {convertDatetime(item.datetime)}
            </span>
            <h2 className="text-sm font-semibold lg:text-base text-blueDarker">
              {item.title}
            </h2>

            <a
              className="mt-1"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer "
            >
              Leia mais
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
