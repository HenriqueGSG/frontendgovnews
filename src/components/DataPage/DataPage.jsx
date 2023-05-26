import React from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
const DataPage = ({ apiUrl, name }) => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: [name],
    queryFn: () => axios.get(apiUrl).then((res) => res.data),
  });

  if (isLoading) {
    return <LoadingScreen categoria={name} />;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <>
      <Navbar />
      <div className="p-0 mt-6 sm:mt-14 sm:ml-56 sm:p-2 ">
        <div className="p-0 border-2 border-gray-200 border-dashed rounded-lg md:p-4 dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">{name}</p>
          </div>

          <div className="flex items-center justify-center">
            <CardList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPage;
