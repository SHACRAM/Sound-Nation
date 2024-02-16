import { useState } from "react";
import "./App.css";
import { ReseauxSociaux } from "./pages/reseauxSociaux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  //   {
  //     path: "/informations&faq",
  //     element: <InformationsFaq />,
  //   },
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
