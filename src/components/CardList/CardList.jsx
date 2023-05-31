import React, { useEffect, useRef } from "react";
import CardNews from "../CardNews/CardNews";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function CardList(props) {
  const { data } = props;
  // const { urlApi, categoryNews } = props;

  // const cardNewsList = () => {
  //   // Access the client

  //   // Queries
  //   const { isLoading, isError, data, error } = useQuery({
  //     queryKey: [categoryNews],
  //     queryFn: () => axios.get(urlApi).then((res) => res.data),
  //   });

  //   if (isLoading) return "Carregando";

  //   if (error) return "An error has occurred: " + error.message;

  //   // const keysArray = Object.keys(data);

  //   return Object.values(data).map((dataNews, index) => (
  //     <CardNews dataNews={dataNews} key={dataNews["_id"]} minName="" />
  //   ));
  // };

  return (
    <div className="grid w-full gap-4 grid-flow-col-1 lg:grid-cols-2 xl:grid-cols-3">
      {data
        ? Object.values(data).map((dataNews, index) => (
            <CardNews dataNews={dataNews} key={dataNews["_id"]} />
          ))
        : "error"}
      ;
    </div>
  );
  {
    /* {data
        ? Object.values(data).map((dataNews, index) => (
            <CardNews dataNews={dataNews} key={dataNews["_id"]} minName="" />
          ))
        : "error"}
      ; */
  }
}
