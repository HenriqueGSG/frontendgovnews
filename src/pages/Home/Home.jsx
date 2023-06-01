import React from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import OrgaoSearchBar from "./components/OrgaoSearchBar";
import Header from "./components/Header";
import TabHeader from "./components/Tab/TabHeader";
import { useGetLastNews, useGetListOrgs } from "../../api/orgs";

export default function Home() {
  const {
    isLoading: listOrgsLoading,
    isError: listOrgsError,
    data: listOrgsData,
  } = useGetListOrgs();
  const {
    isLoading: lastNewsLoading,
    isError: lastNewsError,
    data: lastNewsData,
    refetch,
  } = useGetLastNews();

  if (lastNewsLoading || listOrgsLoading) {
    return <LoadingScreen />;
  }

  if (lastNewsError || listOrgsError) {
    return "An error has occurred: " + error.message;
  }

  return (
    <>
      {/* NAV BAR */}

      <div className="flex flex-col min-h-screen gap-3 px-4 pt-6 sm:py-4 bg-neutral-50 sm:ml-60 ">
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-4xl ">Portal de notícias governamentais</h1>
            <p className="">Atualizado diariamente</p>
          </div>
        </div>
        <Header />
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          <OrgaoSearchBar data={listOrgsData} />
        </div>
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
          <div className="h-full">
            <h1 className="pb-2 mb-4 text-lg font-semibold border-b-2">
              Ultimas Notícias
            </h1>

            <TabHeader data={lastNewsData} />
          </div>
        </div>

        {/* {lastNewsData["ministerio"] ? (
          <CardSmall
            lastNewsOrg={lastNewsData["ministerio"]}
            name={"Ministérios"}
            color={"bg-gradient-to-r from-indigo-500 to-indigo-600"}
            url={"/ministerios"}
            apiParam={"ministerio"}
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
            apiParam={"assembleia"}
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
            apiParam={"tribunal"}
            listOrgs={listOrgsData["tribunal"]}
          />
        ) : (
          ""
        )} */}
      </div>
      {
        /* MAIN */
        // CARDS
      }
    </>
  );
}
