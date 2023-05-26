import React, { useEffect, useRef } from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";
import DataPage from "../../components/DataPage/DataPage";

const Tribunais = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/tribunais"}
      name={"Tribunais"}
    />
  );
};
// urlApi={"https://fastapi1-1-s9258384.deta.app/ministerios"} category={}
export default Tribunais;
