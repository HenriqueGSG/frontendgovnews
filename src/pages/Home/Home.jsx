import React from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import OrgaoSearchBar from "./components/OrgaoSearchBar";
import Header from "./components/Header";
import TabHeader from "./components/Tab/TabHeader";
import { useGetLastNews, useGetListOrgs } from "../../api/orgs";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

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

      <div className="flex flex-col min-h-screen gap-2 px-2 pt-16 pb-5 sm:px-4 sm:py-4 bg-gold sm:ml-14 ">
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          <div className="flex flex-col gap-3 text-blueDarker">
            <h1 className="text-4xl ">Portal de notícias governamentais</h1>
            <p className="">Atualizado diariamente</p>
          </div>
        </div>
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          <OrgaoSearchBar data={listOrgsData} />
        </div>
        <Header />
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather">
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg "> */}
          <div className="h-full">
            <h1 className="pb-2 mb-4 text-lg font-semibold border-b-2 text-blueDarker">
              Ultimas Notícias
            </h1>

            <TabHeader data={lastNewsData} />
          </div>
        </div>
        <div className="sticky flex items-end justify-end w-full right-3 bottom-4">
          <ScrollToTopButton />
        </div>
      </div>
      {}
    </>
  );
}
