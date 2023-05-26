import React from "react";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import DataPage from "../../components/DataPage/DataPage";

const Assembleias = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/assembleias"}
      name={"Assembleias"}
    />
  );
};

export default Assembleias;
