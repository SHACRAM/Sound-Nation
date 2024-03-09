import React, { useContext } from "react";
import { VignetteGroupeTest } from "../components/VignetteGroupeTest";
import { FilterContext } from "../contexts/FilterContext";

export const AffichageGroupe = ({ data }) => {
  const { dataFilters } = useContext(FilterContext);

  const joursValides =
    dataFilters && dataFilters.Jours
      ? dataFilters.Jours.filter((jour) => jour.checked).map((jour) => jour.id)
      : [];

  const scenesValides =
    dataFilters && dataFilters.Scenes
      ? dataFilters.Scenes.filter((scene) => scene.checked).map(
          (scene) => scene.id
        )
      : [];

  const heuresValides =
    dataFilters && dataFilters.Heures
      ? dataFilters.Heures.filter((heure) => heure.checked).map(
          (heure) => heure.id
        )
      : [];

  return (
    <div>
      <div id="dev">
        {data &&
          data.map((groupe) => {
            if (
              joursValides.includes(groupe.attributes.jour) &&
              scenesValides.includes(groupe.attributes.scene) &&
              heuresValides.includes(groupe.attributes.horaire)
            ) {
              {
                console.log("test");
                return (
                  <VignetteGroupeTest key={groupe.id} groupeData={groupe} />
                );
              }
            }
          })}
      </div>
    </div>
  );
};
