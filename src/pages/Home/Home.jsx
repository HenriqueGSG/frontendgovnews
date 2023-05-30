import React from "react";
import CardSmall from "../../components/CardSmall/CardSmall";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Home() {
  const lastNewsUrl = "https://fastapi1-1-s9258384.deta.app/orgs";
  const listOrgsUrl = "https://fastapi1-1-s9258384.deta.app/unique-orgs";

  const fetchLastNewsOrgs = () =>
    axios.get(lastNewsUrl).then((res) => res.data);
  const fetchListOrgs = () => axios.get(listOrgsUrl).then((res) => res.data);

  const {
    isLoading: listOrgsLoading,
    isError: listOrgsError,
    data: listOrgsData,
  } = useQuery(["listOrgs"], fetchListOrgs);
  const {
    isLoading,
    isError,
    data: lastNewsData,
    error,
    refetch,
  } = useQuery(["lastNewsOrgs"], fetchLastNewsOrgs);
  if (isLoading || listOrgsLoading) {
    return <LoadingScreen />;
  }

  if (error || listOrgsError) {
    return "An error has occurred: " + error.message;
  }

  const bgCard = "bg-neutral-600";

  const listColors = [
    "bg-red-400",
    "bg-indigo-500",
    "bg-orange-400",
    "bg-green-400",
  ];

  const ministerioLista = [
    "Saúde",
    "Educação",
    "Economia",
    // "Justiça e Segurança Pública",
  ];
  const assembleiasLista = [
    "São paulo",
    "Rio Grande do Sul",
    "Rio de janeiro",
    // "Minas Gerais",
  ];
  const tribunaisLista = ["Tribunal Superior Eleitoral"];

  return (
    <>
      {/* NAV BAR */}

      <div className="flex flex-col min-h-screen gap-3 px-4 pt-6 sm:py-4 bg-neutral-50 sm:ml-60 ">
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
          <div className="flex flex-col gap-3 ">
            <h1 className="text-4xl ">Portal de notícias governamentais</h1>
            <p className="">Atualizado diariamente</p>
          </div>
        </div>

        {lastNewsData["ministerio"] ? (
          <CardSmall
            lastNewsOrg={lastNewsData["ministerio"]}
            name={"Ministérios"}
            color={"bg-gradient-to-r from-indigo-500 to-indigo-600"}
            url={"/ministerios"}
            listOrgs={listOrgsData["ministerio"]}
          />
        ) : (
          ""
        )}

        {lastNewsData["assembleia"] ? (
          <CardSmall
            lastNewsOrg={lastNewsData["assembleia"]}
            name={"Assembleias"}
            color={"bg-gradient-to-r from-green-500 to-green-600"}
            url={"/assembleias"}
            listOrgs={listOrgsData["assembleia"]}
          />
        ) : (
          ""
        )}
        {lastNewsData["tribunal"] ? (
          <CardSmall
            lastNewsOrg={lastNewsData["tribunal"]}
            name={"Tribunais"}
            color={"bg-gradient-to-r from-orange-500 to-orange-600"}
            url={"/tribunais"}
            listOrgs={listOrgsData["tribunal"]}
          />
        ) : (
          ""
        )}
      </div>
      {
        /* MAIN */
        // CARDS
      }
    </>
  );
}
