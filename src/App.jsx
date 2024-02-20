import { useState } from "react";
import "./App.css";
import { ReseauxSociaux } from "./pages/ReseauxSociaux";
import { InformationsFaq } from "./pages/informations&faq";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DonneesPersonnelles } from "./pages/DonneesPersonnelles";
import { Cookies } from "./pages/Cookies";
import { Cgv } from "./pages/Cgv";

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Accueil />,
  //   },
  {
    path: "/reseauxSociaux",
    element: <ReseauxSociaux />,
  },
  //   {
  //     path: "/carte",
  //     element: <Carte />,
  //   },
  {
    path: "/informations&faq",
    element: <InformationsFaq />,
  },
  {
    path: "/informations&faq/DonneesPersonnelles",
    element: <DonneesPersonnelles />,
  },
  {
    path: "/informations&faq/Cookies",
    element: <Cookies />,
  },
  {
    path: "/informations&faq/Cgv",
    element: <Cgv />,
  },
  //   {
  //     path: "/programmation",
  //     element: <Programmation />,
  //   },
  //   {
  //     path: "/patenaires",
  //     element: <Partenaires />,
  //   },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
