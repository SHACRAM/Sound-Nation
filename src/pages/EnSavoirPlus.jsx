import React from "react";
import { Layout } from "../components/Layout";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const EnSavoirPlus = () => {
  const locationInfo = useLocation();
  const { nom, horaire, scene, image, alt, bio } = locationInfo.state;
  return (
    <Layout>
      <div className="bg-black m-10 p-10 flex flex-col items-center gap-[4em] rounded-xl">
        <h1 className="text-white text-[1.5rem] underline">{nom}</h1>
        <img src={image} alt={alt} className="w-[15em] rounded-[30px]" />
        <p className="text-white text-[1.2rem] flex flex-col items-center w-[80%]">
          {bio}
        </p>
        <NavLink to="/programmation">
          <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
            Retour à la programmation
          </button>
        </NavLink>
      </div>
    </Layout>
  );
};
