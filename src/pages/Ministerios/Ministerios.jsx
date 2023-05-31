import React from "react";

import DataPage from "../../components/DataPage/DataPage";

const Ministerios = () => {
  return (
    <DataPage
      apiUrl={"https://fastapi1-1-s9258384.deta.app/ministerios"}
      headerName={"Ministério"}
      bgColor={"bg-gradient-to-r from-indigo-500 to-indigo-600"}
      orgName={"ministerio"}
      // bgColor={"bg-indigo-500"}
    />
  );
};
export default Ministerios;
