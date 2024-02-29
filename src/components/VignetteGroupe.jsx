import React from "react";
import { NavLink } from "react-router-dom";

export const VignetteGroupe = ({
  nom,
  horaire,
  scene,
  image,
  alt,
  id,
  bio,
}) => {
  return (
    <div
      className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
      key={id}
    >
      <h2 className="text-white text-[1.5rem] underline">{nom}</h2>
      <img className="w-[15em] rounded-[30px]" src={image} alt={alt} />
      <p className="text-white text-[1.5rem]">{`${horaire} h`}</p>
      <p className="text-white text-[1.5rem]">{`Scène ${scene}`}</p>
      <NavLink
        to={`/EnSavoirPlus/:${id}`}
        state={{ nom, horaire, scene, image, alt, bio }}
      >
        <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
          En savoir plus
        </button>
      </NavLink>
    </div>
  );
};
