import React from "react";

export const ScrollOrgs = ({ listOrgs, bgColor, textColor }) => {
  const handleClick = (elKey) => {
    const element = document.getElementById(elKey);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(listOrgs);
  const orgsItems = () => {
    return Object.values(listOrgs).map((org, index) => {
      return (
        <button
          onClick={() => handleClick(org)}
          className={` inline-block min-w-fit px-3 py-1 rounded-md  shadow-md ${bgColor} ${textColor} font-merriweather text-sm `}
          style={{ whiteSpace: "nowrap" }}
        >
          {org}
        </button>
      );
    });
  };

  return (
    <div className="flex flex-row items-center h-16 min-w-full gap-6 overflow-x-auto custom-scrollbar">
      {orgsItems()}
    </div>
  );
};
