import React from "react";
import CardSmall from "../../components/CardSmall/CardSmall";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Home() {
  const apiUrl = "https://fastapi1-1-s9258384.deta.app/orgs";

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["orgsList"],
    queryFn: () => axios.get(apiUrl).then((res) => res.data),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
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

      <div className="flex flex-col min-h-screen gap-3 p-4 mt-2 sm:mt-14 bg-neutral-800 sm:ml-56">
        <CardSmall
          listOrgs={data["ministerio"]}
          name={"Ministérios"}
          color={"bg-indigo-600"}
          url={"/ministerios"}
        />
        <CardSmall
          listOrgs={data["assembleia"]}
          name={"Assembleias"}
          color={"bg-green-600"}
          url={"/assembleias"}
        />
        <CardSmall
          listOrgs={data["tribunal"]}
          name={"Tribunais"}
          color={"bg-orange-600"}
          url={"/tribunais"}
        />
      </div>
      {
        /* MAIN */
        // CARDS
      }
    </>
  );
}
