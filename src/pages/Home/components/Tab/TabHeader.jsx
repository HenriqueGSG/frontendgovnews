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
      <div className="grid grid-cols-3 gap-4 ">
        <button
          className={`py-1 font-bold lg:text-lg text-base   border-opacity-50 rounded-md shadow ${
            activeTab == "ministerio"
              ? "bg-gray-50 text-neutral-900"
              : "bg-gold text-white"
          }   `}
          onClick={() => handleTabChange("ministerio")}
        >
          Ministério
        </button>
        <button
          className={`py-1 font-bold lg:text-lg  text-base  border-opacity-50 rounded-md shadow ${
            activeTab == "assembleia"
              ? "bg-gray-50 text-neutral-900"
              : "bg-gold text-white"
          }   `}
          onClick={() => handleTabChange("assembleia")}
        >
          Assembleia
        </button>
        <button
          className={`py-1 font-bold lg:text-lg text-base border-opacity-50 rounded-md shadow ${
            activeTab == "tribunal"
              ? "bg-gray-50 text-neutral-900"
              : "bg-gold text-white"
          }   `}
          onClick={() => handleTabChange("tribunal")}
        >
          Tribunal
        </button>
      </div>
      <div className="h-full mt-4 border-t-2 ">
        {activeTab === "ministerio" && <TabContent data={data.ministerio} />}
        {activeTab === "assembleia" && <TabContent data={data.assembleia} />}
        {activeTab === "tribunal" && <TabContent data={data.tribunal} />}
      </div>
    </>
  );
};

export default TabHeader;
