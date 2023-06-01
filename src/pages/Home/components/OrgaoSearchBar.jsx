import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        orgs: filteredMinisterios.slice(0, 3),
      },
      {
        tipo: "assembleia",
        orgs: filteredAssembleias.slice(0, 3),
      },
      {
        tipo: "ministerio",
        orgs: filteredTribunais.slice(0, 3),
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
    <div className="relative ">
      <h4 className="mb-2 text-lg font-semibold text-center">Procurar</h4>
      <input
        className="w-full border-0 shadow-inner rounded-2xl bg-neutral-50"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Digite o nome do órgão..."
      />
      {/* <ul className="absolute left-0 z-50 flex flex-col items-center w-full gap-3 py-4 bg-white shadow-sm top-full"></ul> */}
      {filteredOrgaos.length > 0 && (
        <ul className="absolute left-0 z-50 flex flex-col items-center w-full gap-3 py-4 mt-3 shadow-sm bg-neutral-50 top-full">
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
