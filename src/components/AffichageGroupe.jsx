import React from "react";
import { useState, useEffect } from "react";
import { VignetteGroupe } from "./VignetteGroupe";
import { Filtres } from "./Filtres";

export const AffichageGroupe = ({ data, setData }) => {
  return (
    <div>
      <div>
        <Filtres data={data} setData={setData} />
      </div>
    </div>
  );
};
