import React, { useState } from "react";
import TabContent from "./TabContent";
const TabHeader = ({ data }) => {
  const [activeTab, setActiveTab] = useState("ministerio");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {" "}
      <div className="grid grid-cols-3 gap-4">
        <button
          className={`py-1   border-opacity-50 rounded-md shadow`}
          onClick={() => handleTabChange("ministerio")}
        >
          Ministério
        </button>
        <button
          className={`py-1   border-opacity-50 rounded-md shadow`}
          onClick={() => handleTabChange("assembleia")}
        >
          Assembleia
        </button>
        <button
          className={`py-1   border-opacity-50 rounded-md shadow`}
          onClick={() => handleTabChange("tribunal")}
        >
          Tribunal
        </button>
      </div>
      <div className="h-full ">
        {activeTab === "ministerio" && <TabContent data={data.ministerio} />}
        {activeTab === "assembleia" && <TabContent data={data.assembleia} />}
        {activeTab === "tribunal" && <TabContent data={data.tribunal} />}
      </div>
    </>
  );
};

export default TabHeader;
