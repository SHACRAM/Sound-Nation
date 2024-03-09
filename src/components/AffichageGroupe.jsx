import React, { useContext } from "react";
import { VignetteGroupeTest } from "../components/VignetteGroupeTest";
import { FilterContext } from "../contexts/FilterContext";

export const AffichageGroupe = ({ data }) => {
  const { dataFilters } = useContext(FilterContext);
  let joursValides;

  let scenesValides;

  let heuresValides;
  if (dataFilters !== null) {
    joursValides = dataFilters.Jours.filter((jour) => jour.checked).map(
      (jour) => jour.id
    );
    scenesValides = dataFilters.Scenes.filter((scene) => scene.checked).map(
      (scene) => scene.id
    );
    heuresValides = dataFilters.Heures.filter((heure) => heure.checked).map(
      (heure) => heure.id
    );
  }

  return (
    <div>
      <div>
        {data &&
          data.map((groupe) => {
            if (
              joursValides.includes(groupe.attributes.jour) ||
              scenesValides.includes(groupe.attributes.scene) ||
              heuresValides.includes(groupe.attributes.horaire)
            ) {
              <VignetteGroupeTest key={groupe.id} groupeData={groupe} />;
            }
          })}
      </div>
    </div>
  );
};
