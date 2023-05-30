import React from "react";

import DataPage from "../../components/DataPage/DataPage";

const Tribunais = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/tribunais"}
      bgColor={"bg-gradient-to-r from-orange-500 to-orange-600"}
      headerName={"Tribunal"}
      orgName={"tribunal"}
    />
  );
};
// urlApi={"https://fastapi1-1-s9258384.deta.app/ministerios"} category={}
export default Tribunais;
