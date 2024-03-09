import React from "react";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";

export const Partenaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/partenaires?populate=*"
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
        <div className="bg-black m-10 rounded-lg">
          <h1 className="text-white text-3xl flex justify-center pt-7 mb-[2em]">
            Nos partenaires
          </h1>
          <div className="flex flex-wrap justify-center">
            {data.map((partenaire) => (
              <div
                key={partenaire.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    partenaire.attributes.logo.data.attributes.url
                  }
                  alt={
                    partenaire.attributes.logo.data.attributes.alternativeText
                  }
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {partenaire.attributes.nom}
                </h2>
                <a href={partenaire.attributes.site}>
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrire
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
};
