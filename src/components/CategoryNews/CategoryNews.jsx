import React from "react";

const CategoryNews = () => {
  const listCategories = ["Ministerios", "Assembleias", "Tribunais"];
  const listColors = [
    "bg-red-400",
    "bg-indigo-500",
    "bg-orange-400",
    "bg-green-400",
  ];
  const cardCategory = (listCategories) => {
    return listCategories.map((category, idx) => (
      <li className="rounded-lg shadow-lg " key={category}>
        <a
          className="flex flex-col items-center text-2xl font-semibold text-black rounded-lg w-72 h-52 bg-neutral-300 "
          href={category}
        >
          <div className={`w-full  ${listColors[idx]} rounded-lg h-4/5`}></div>
          <h1 className="flex items-center justify-center px-2 my-2 rounded-b-lg w-fulltext-center h-1/5">
            {category}
          </h1>
        </a>
      </li>
    ));
  };

  return (
    <ul className="flex flex-row flex-wrap justify-center w-full gap-5">
      {cardCategory(listCategories)}
    </ul>
  );
};

export default CategoryNews;
