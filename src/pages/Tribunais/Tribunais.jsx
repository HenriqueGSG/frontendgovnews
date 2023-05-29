import React from "react";

import DataPage from "../../components/DataPage/DataPage";

const Tribunais = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/tribunais"}
      name={"Tribunais"}
      bgColor={"bg-orange-500"}
    />
  );
};
// urlApi={"https://fastapi1-1-s9258384.deta.app/ministerios"} category={}
export default Tribunais;
