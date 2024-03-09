import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const AffichageGroupeAll = ({ dataAll }) => {
  return (
    <div className="flex flex-wrap mt-[2em] justify-center">
      {dataAll.map((groupe) => (
        <div
          className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
          key={groupe.id}
        >
          <h2 className="text-white text-[1.5rem] underline">
            {groupe.attributes.nom}
          </h2>
          <img
            className="w-[15em] rounded-[30px]"
            src={
              "http://localhost:1337" +
              groupe.attributes.Image.data.attributes.url
            }
            alt={groupe.attributes.Image.data.attributes.alternativeText}
          />
          <p className="text-white text-[1.5rem]">{groupe.attributes.jour}</p>
          <p className="text-white text-[1.5rem]">{`${groupe.attributes.horaire} `}</p>
          <p className="text-white text-[1.5rem]">{`Scène ${groupe.attributes.scene}`}</p>
          <NavLink
            to={`/EnSavoirPlus/:${groupe.id}`}
            // state={{ nom, horaire, scene, image, alt, bio }}
          >
            <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
              En savoir plus
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
