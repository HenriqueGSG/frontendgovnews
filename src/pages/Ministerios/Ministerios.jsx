import React, { useEffect, useRef } from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

import DataPage from "../../components/DataPage/DataPage";

// const LoadingAnimation = () => {
//   const animRef = useRef(null);

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: animRef.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: loadingAnimation,
//     });
//   }, []);

//   return <div className="w-60 h-60" ref={animRef}></div>;
// };

const Ministerios = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/ministerios"}
      name={"Ministerios"}
    />
  );
};
export default Ministerios;
