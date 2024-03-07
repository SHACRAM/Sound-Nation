import { useState } from "react";
import "./App.css";
import { ReseauxSociaux } from "./pages/ReseauxSociaux";
import { InformationsFaq } from "./pages/informations&faq";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DonneesPersonnelles } from "./pages/DonneesPersonnelles";
import { Cookies } from "./pages/Cookies";
import { DisplayCgv } from "./components/DisplayCgv";
import { Programmation } from "./pages/programmation";
import { EnSavoirPlus } from "./pages/EnSavoirPlus";
import { Partenaire } from "./pages/partenaires";

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
    path: "/EnSavoirPlus/:id",
    element: <EnSavoirPlus />,
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
    element: <DisplayCgv />,
  },
  {
    path: "/programmation",
    element: <Programmation />,
  },
  {
    path: "/partenaires",
    element: <Partenaire />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
