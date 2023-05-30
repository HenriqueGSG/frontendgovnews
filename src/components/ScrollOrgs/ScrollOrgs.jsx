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
    <div className="fixed top-0 z-50 flex flex-row items-center min-w-full gap-6 py-4 overflow-x-auto mt-14 sm:mt-0 custom-scrollbar sm:relative bg-neutral-100">
      {orgsItems()}
    </div>
  );
};
