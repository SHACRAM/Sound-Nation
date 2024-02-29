import React from "react";
import { VignetteGroupe } from "./VignetteGroupe";

export const Groupe = ({ data }) => {
  const groupeDuJour = data.map((groupe) => {
    const commonProps = {
      id: groupe.id,
      bio: groupe.attributes.bio,
      nom: groupe.attributes.nom,
      horaire: groupe.attributes.horaire,
      scene: groupe.attributes.scene,
      alt: groupe.attributes.Image.data.attributes.alternativeText,
      image:
        "http://localhost:1337" + groupe.attributes.Image.data.attributes.url,
    };
    if (
      groupe.attributes.jour === "22" ||
      groupe.attributes.jour === "23" ||
      groupe.attributes.jour === "24"
    ) {
      return <VignetteGroupe key={groupe.id} {...commonProps} />;
    }
  });

  return <div className="flex flex-wrap p-10 ">{groupeDuJour}</div>;
};
