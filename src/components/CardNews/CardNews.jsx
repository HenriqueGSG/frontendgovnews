import React from "react";
import "./CardNews.css";
import "@fontsource/merriweather"; // Importe a fonte Merriweather
export default function CardNews({ dataNews, minName }) {
  const news = (dataNews) => {
    const newArray = dataNews.documentos.map((item, index) => {
      //   console.log(item);
      const date = new Date(item.datetime * 1000);
      const formattedDate = date.toLocaleDateString("en-GB");
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return (
        <li className="shadow-md " key={index}>
          <a
            className="flex flex-col items-start px-2 py-2 border rounded-md hover:bg-neutral-500 bg-neutral-700 border-neutral-600"
            href={item.url}
            target="_blank"
          >
            <span className="pl-1 text-xs font-semibold item font-merriweather ">
              {item.subtitle}
            </span>
            <div className="relative flex flex-row items-center w-full h-16 pl-2 text-start min-h-fit">
              <h3 className="text-xs w-12/12 font-merriweather ">
                {item.title}
              </h3>
              <div className="absolute bottom-0 right-0 flex items-center text-xs text-neutral-400 gap-x-1">
                <span className=""> {formattedDateTime}</span>
                {/* <span className="">{item.hour}</span> */}
              </div>
            </div>
          </a>
        </li>
      );
    });
    return newArray;
  };

  return (
    <div
      className="max-w-lg p-2 m-1 text-center text-white bg-white rounded-lg shadow-lg"
      id={dataNews["_id"]}
    >
      <div className="relative w-full h-60 ">
        <div
          className="absolute inset-0 bg-center bg-cover "
          style={{
            backgroundImage: `url(https://i.ibb.co/4F0Kn3v/bg-image.png)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="absolute inset-0 flex items-center justify-center p-10 text-2xl font-semibold text-white font-merriweather">
          {dataNews["_id"]}
        </h2>
      </div>
      {/* <img
        src={dataNews.img}
        alt="Ministério economia"
        className="w-full h-60"
      /> */}
      <div className="flex flex-col justify-end ">
        <h2 className="py-2 text-xl ">{}</h2>
        <ul className="flex flex-col px-2 py-2 overflow-y-auto custom-scrollbar gap-y-2">
          {news(dataNews)}
        </ul>
      </div>
    </div>
  );
}
