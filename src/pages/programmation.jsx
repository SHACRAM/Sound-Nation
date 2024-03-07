import { AffichageGroupe } from "../components/AffichageGroupe";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Filtres } from "../components/Filtres";

export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/groupes?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Chargement en cours...</p>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg flex flex-col items-center ">
          <h1 className="text-white flex justify-center p-5 mb-5 text-3xl">
            Programmation
          </h1>
          <AffichageGroupe data={data} setData={setData} />
        </div>
      </Layout>
    );
};
