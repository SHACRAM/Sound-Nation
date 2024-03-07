import React from "react";
import { useState } from "react";
import { CheckBox } from "./CheckBox";
import { VignetteGroupe } from "./VignetteGroupe";
import { AffichageGroupeAll } from "./AffichageGroupeAll";

export const Filtres = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilters = () => {
    setIsOpen(!isOpen);
  };
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState([""]);

  const [all, setAll] = useState(true);

  return (
    <div className="p-10 flex flex-col items-center">
      <button
        onClick={handleFilters}
        className={`bg-[#023E33] text-white w-[15em] p-2 rounded-lg flex flex-1 justify-center text-[1.3rem] gap-2 ${
          isOpen ? "rounded-b-none" : ""
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
            isOpen
              ? "rotate-0 transition-transform ease-in-out duration-[0.4s]"
              : "rotate-180 transition-transform ease-in-out duration-[0.4s]"
          }`}
          src="../public/images/angle-up-solid.svg "
          alt="chevron pour ouvir fermer le menu"
        />
      </button>

      <div
        className={` flex flex-row flex-wrap p-5 rounded-lg bg-[#71A984] transition-all ease-in-out duration-[0.2s] delay-0 transform z-1 ${
          isOpen
            ? "max-h-75 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 max-h-0"
        }`}
      >
        <CheckBox
          checkBoxChecked={isCheckBoxChecked}
          setCheckBoxChecked={setIsCheckBoxChecked}
          setCheckBoxAll={setAll}
          checkBoxAll={all}
        />
      </div>

      <VignetteGroupe checkBoxChecked={isCheckBoxChecked} groupeData={data} />
      {all ? <AffichageGroupeAll dataAll={data} /> : null}
    </div>
  );
};
