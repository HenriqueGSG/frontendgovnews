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
    <div className="grid h-full grid-cols-1 gap-2 py-2 text-center lg:grid-cols-2 lg:text-start ">
      {data.map((item) => (
        <div key={item._id} className="py-5">
          <div className="w-full px-2 py-1 text-base font-semibold text-center bg-white rounded-lg shadow lg:w-fit">
            <Link to={`${item.tipo}/${item.org}`} className="">
              {item.org}
            </Link>
          </div>
          <div className="flex flex-col max-w-2xl gap-2 px-3 py-2">
            <span className="font-sans text-xs text-neutral-500">
              {convertDatetime(item.datetime)}
            </span>
            <h2 className="text-sm lg:text-base">{item.title}</h2>

            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
