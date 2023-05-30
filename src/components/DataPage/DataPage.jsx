import React from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import "@fontsource/merriweather"; // Importe a fonte Merriweather
import { ScrollOrgs } from "../ScrollOrgs/ScrollOrgs";

const DataPage = ({ apiUrl, headerName, bgColor, orgName }) => {
  const listOrgsUrl = "https://fastapi1-1-s9258384.deta.app/unique-orgs";

  const fetchListOrgs = () => axios.get(listOrgsUrl).then((res) => res.data);

  const {
    isLoading: listOrgsLoading,
    isError: listOrgsError,
    data: listOrgsData,
  } = useQuery(["listOrgs"], fetchListOrgs);

  const {
    isLoading: isLoadingCardData,
    isError,
    data: cardsData,
    error,
    refetch,
  } = useQuery({
    queryKey: [headerName],
    queryFn: () => axios.get(apiUrl).then((res) => res.data),
  });

  if (isLoadingCardData || listOrgsLoading) {
    return <LoadingScreen categoria={headerName} bgColor={bgColor} />;
  }

  if (isError || listOrgsError) {
    return "An error has occurred: " + error.message;
  }
  console.log(listOrgsData[orgName]);
  return (
    <>
      <div className="relative min-h-screen p-4 pt-24 sm:pt-4 sm:ml-60 bg-neutral-100 ">
        <div className="p-0 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div
            className={`flex items-center justify-center h-48 mb-4 rounded ${bgColor} dark:bg-gray-800`}
          >
            <p className="text-5xl font-semibold text-white dark:text-gray-500 font-merriweather">
              {headerName}
            </p>
          </div>
          <ScrollOrgs
            listOrgs={listOrgsData[orgName]}
            bgColor={"bg-white"}
            textColor={"text-black"}
          />
          <div className="flex items-center justify-center">
            <CardList data={cardsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPage;
