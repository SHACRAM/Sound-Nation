import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DisplayCgv } from "./components/DisplayCgv";
import { Accueil } from "./pages/Accueil";
import { Cookies } from "./pages/Cookies";
import { DonneesPersonnelles } from "./pages/DonneesPersonnelles";
import { EnSavoirPlus } from "./pages/EnSavoirPlus";
import { InformationsFaq } from "./pages/informations&faq";
import { Partenaire } from "./pages/partenaires";
import { Programmation } from "./pages/Programmation";
import { ReseauxSociaux } from "./pages/ReseauxSociaux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
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
