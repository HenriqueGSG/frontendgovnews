import React from "react";
import "./ScrollOrgs.css";
export const ScrollOrgs = ({ listOrgs, bgColor, textColor }) => {
  const handleClick = (elKey) => {
    const element = document.getElementById(elKey);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: "center", // ou "end", "center", "nearest"
        inline: "nearest", // ou "start", "end", "center"
      };
      element.scrollIntoView(scrollOptions);
    }
  };

  const orgsItems = () => {
    return Object.values(listOrgs).map((org, index) => {
      return (
        <button
          onClick={() => handleClick(org)}
          className={` inline-block min-w-fit px-3 py-2 rounded-md  shadow-md ${bgColor} ${textColor} font-merriweather text-sm `}
          style={{ whiteSpace: "nowrap" }}
          key={index}
        >
          {org}
        </button>
      );
    });
  };

  return orgsItems();
};
