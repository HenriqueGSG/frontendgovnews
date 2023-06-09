import React from "react";

const Header = () => {
  return (
    <div className="relative p-4 text-center bg-white rounded-lg shadow-lg font-merriweather text-blueDarker">
      <h2 className="pb-2 mb-4 text-lg font-semibold border-b-2">Orgãos</h2>
      <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-3 h-fit lg:h-60 ">
        <div className="flex flex-col justify-center h-full lg:border-r-2 ">
          <h3 className="text-lg font-semibold ">Ministérios</h3>
          <span className="text-6xl">13</span>
        </div>
        <div className="flex flex-col justify-center h-full lg:border-r-2">
          <h3 className="text-lg font-semibold">Assembleias</h3>
          <span className="text-6xl">9</span>
        </div>
        <div className="flex flex-col justify-center h-full ">
          <h3 className="text-lg font-semibold">Tribunais</h3>
          <span className="text-6xl">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
