import React, { useEffect, useRef } from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import DataPage from "../../components/DataPage/DataPage";
LoadingScreen;

const Assembleias = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/assembleias"}
      name={"Assembleias"}
    />
  );
};

export default Assembleias;
