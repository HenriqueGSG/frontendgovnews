import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const OrgaoSearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredOrgaos, setFilteredOrgaos] = useState([]);

  const handleSearch = () => {
    const filteredMinisterios = data.ministerio.filter((orgao) =>
      orgao.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filteredAssembleias = data.assembleia.filter((orgao) =>
      orgao.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filteredTribunais = data.tribunal.filter((orgao) =>
      orgao.toLowerCase().includes(searchValue.toLowerCase())
    );

    const filteredResults = [
      {
        tipo: "ministerio",
        orgs: filteredMinisterios,
      },
      {
        tipo: "assembleia",
        orgs: filteredAssembleias,
      },
      {
        tipo: "ministerio",
        orgs: filteredTribunais,
      },
    ];
    console.log(filteredResults);
    setFilteredOrgaos(filteredResults.slice(0, 5));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value === "") {
      setFilteredOrgaos([]);
    } else {
      handleSearch(value);
    }
  };

  return (
    <div className="relative text-blueDarker">
      <h4 className="mb-2 text-lg font-semibold text-center">Procurar</h4>
      <div className="relative w-full rounded-2xl ">
        <input
          className="w-full border-0 shadow-inner rounded-2xl bg-neutral-50 focus:ring-gold"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Digite o nome do órgão..."
        />
        <BiSearchAlt className="absolute w-5 h-5 text-gray-500 right-3 bottom-2" />
      </div>
      {/* <ul className="absolute left-0 z-50 flex flex-col items-center w-full gap-3 py-4 bg-white shadow-sm top-full"></ul> */}
      {filteredOrgaos.length > 0 && (
        <ul className="absolute left-0 z-50 flex flex-col items-center w-full gap-3 py-4 mt-3 overflow-auto shadow-sm max-h-56 bg-neutral-50 top-full">
          {filteredOrgaos.map((result, index) => {
            {
              return result.orgs.map((orgao, i) => (
                <li key={i}>
                  <Link to={`${result.tipo}/${orgao}`}>{orgao}</Link>
                </li>
              ));
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default OrgaoSearchBar;
