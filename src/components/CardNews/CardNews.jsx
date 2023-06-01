import React from "react";
import "./CardNews.css";
import "@fontsource/merriweather"; // Importe a fonte Merriweather
export default function CardNews({ dataNews }) {
  const news = (dataNews) => {
    const newArray = dataNews.documentos.map((item, index) => {
      const date = new Date(item.datetime * 1000);
      const formattedDate = date.toLocaleDateString("en-GB");
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return (
        <li className="h-full shadow-md" key={index}>
          <a
            className="flex flex-col items-start justify-center h-full gap-2 px-2 py-4 bg-white rounded-md hover:bg-neutral-50 "
            href={item.url}
            target="_blank"
          >
            <span className="font-semibold text-normal lg:text-sm item font-merriweather">
              {item.subtitle}
            </span>
            <div className="flex flex-col w-full gap-3 px-2 text-start">
              <h3 className="text-xs w-12/12 font-merriweather ">
                {item.title}
              </h3>
              <span className="text-xs text-neutral-500 text-end">
                {" "}
                {formattedDateTime}
              </span>
            </div>
          </a>
        </li>
      );
    });
    return newArray;
  };

  return (
    <div className="rounded-lg shadow-md bg-neutral-50" id={dataNews["_id"]}>
      <div className="flex flex-col h-full p-2 text-center ">
        <div
          className={`flex items-center justify-center h-16 pt-2 pb-2 border-b-2  bg-white`}
        >
          <span className="text-xl font-semibold lg:text-base font-merriweather">
            {dataNews["_id"]}
          </span>
        </div>
        <div className="flex flex-col h-full gap-3 p-2 text-center">
          <h3 className="text-sm font-merriweather text-neutral-500 ">
            Noticias
          </h3>
          <ul className="grid h-full gap-2 grid-col-1 ">{news(dataNews)}</ul>
        </div>
      </div>
    </div>
  );
}
