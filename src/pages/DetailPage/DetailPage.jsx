import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

import { RiGovernmentLine } from "react-icons/ri";

const DetailPage = () => {
  const params = useParams();

  const listOrgsUrl = `https://fastapi1-1-s9258384.deta.app/filtrar/${params["orgType"]}?org=${params["orgName"]}`;
  const fetchOrg = () => axios.get(listOrgsUrl).then((res) => res.data);
  const {
    isLoading: orgDataLoading,
    isError: orgDataError,
    data: orgData,
  } = useQuery([params["orgName"]], fetchOrg);

  if (orgDataLoading) {
    return <LoadingScreen />;
  }

  if (orgDataError) {
    return "An error has occurred: ";
  }

  const newsOrg = () => {
    return Object.values(orgData).map((news, index) => {
      const date = new Date(news.datetime * 1000);
      const formattedDate = date.toLocaleDateString("en-GB");
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return (
        <a
          key={index}
          target="_blank"
          href={news.url}
          className="relative flex flex-col justify-start w-full gap-1 px-4 py-8 rounded-md shadow-md font-merriweather hover:bg-neutral-100 "
        >
          <span className="absolute text-xs right-3 top-3 text-neutral-900">
            {index + 1}º{" "}
          </span>
          <div className="flex ">
            <span> {news.subtitle}</span>
            <span className="absolute font-sans text-xs bottom-2 right-2 text-neutral-500">{`${formattedDate} ${formattedTime}`}</span>
          </div>

          <h2 className="font-semibold">{news.title}</h2>
          <p className="text-sm text-neutral-500">{news.description}</p>
        </a>
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen gap-3 px-4 py-10 sm:py-4 bg-neutral-50 sm:ml-60 ">
      <div className="relative p-4 mb-5 text-center bg-white rounded-lg shadow-md font-merriweather">
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
        <div className="relative flex flex-col gap-3 ">
          <h1 className="text-4xl ">{params["orgName"]}</h1>
        </div>
      </div>
      <Link className="px-3 py-1 bg-white rounded-lg shadow w-fit" to="/">
        Voltar
      </Link>
      <div className="flex flex-col w-full gap-2 p-4 bg-white rounded-lg shadow-md">
        <h1 className="pb-1 mb-2 text-2xl font-semibold border-b-2 font-merriweather">
          Notícias
        </h1>
        <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
          {newsOrg()}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
