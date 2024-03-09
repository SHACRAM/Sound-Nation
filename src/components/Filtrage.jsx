import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { getDataFilters } from "../utils/dataFilters";
import { CheckBoxTest } from "./CheckBoxTest";

export const Filtrage = () => {
  const { dataFilters, setDataFilters } = useContext(FilterContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setDataFilters(getDataFilters());
  }, []);

  const handleModalDisplay = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCheck = (nomCategorie, id) => {
    const updatedFilters = { ...dataFilters };
    const categorie = updatedFilters[nomCategorie];

    const index = categorie.findIndex((item) => item.id === id);

    if (index !== -1) {
      categorie[index].checked = !categorie[index].checked;
    }

    setDataFilters(updatedFilters);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      {console.log(dataFilters)}
      <button
        onClick={handleModalDisplay}
        className={`bg-[#023E33] text-white w-[15em] p-2 rounded-lg flex flex-1 justify-center text-[1.3rem] gap-2 z-30 ${
          modalIsOpen ? "rounded-b-none" : ""
        }`}
      >
        Filtres
        <img
          className="w-8"
          src="../public/images/filtre.svg"
          alt="logo pour les filtres"
        />
        <img
          className={`w-6 ${
            modalIsOpen
              ? "rotate-0 transition-transform ease-in-out duration-[0.4s]"
              : "rotate-180 transition-transform ease-in-out duration-[0.4s]"
          }`}
          src="../public/images/angle-up-solid.svg "
          alt="chevron pour ouvir fermer le menu"
        />
      </button>

      <div
        className={` flex flex-row flex-wrap p-5 rounded-lg bg-[#71A984] transition-all ease-in-out duration-[0.2s] delay-0 transform z-1 ${
          modalIsOpen
            ? "max-h-75 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 max-h-0"
        }`}
      >
        {Object.keys(dataFilters).map((key) => (
          <FiltrageCategorie
            key={key}
            nomCategorie={key}
            filtres={dataFilters[key]}
            handleCheck={handleCheck}
          />
        ))}
        <CheckBoxTest
          label="Tous"
          id="tous"
          handleCheck={() => {
            setDataFilters(getDataFilters());
          }}
        />
      </div>
    </div>
  );
};

const FiltrageCategorie = ({ nomCategorie, filtres, handleCheck }) => {
  return (
    <div>
      <h2 className="underline text-[1.5rem] mb-3">{nomCategorie}</h2>
      <ul>
        {filtres.map((filtre) => (
          <li
            key={filtre.id}
            className="flex flex-row justify-between gap-3 mb-3"
          >
            <CheckBoxTest
              label={filtre.label}
              id={filtre.id}
              handleCheck={handleCheck}
              nomCategorie={nomCategorie}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
