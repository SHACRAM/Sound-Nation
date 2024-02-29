import { Groupe } from "../components/Groupe";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";

export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [imageGroupe, setImageGroupe] = useState(null);

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

  const vendredi22 = data
    ? data.filter((groupe) => groupe.attributes.jour === "22")
    : [];
  const samedi23 = data
    ? data.filter((groupe) => groupe.attributes.jour === "23")
    : [];
  const dimanche24 = data
    ? data.filter((groupe) => groupe.attributes.jour === "24")
    : [];

  return (
    <Layout>
      <div className="bg-black m-10 rounded-lg flex flex-col items-center ">
        <h1 className="text-white flex justify-center p-5 mb-5 text-3xl">
          Programmation
        </h1>
        {data ? (
          <>
            <h2 className="text-white flex justify-center w-[fit-content] text-xl bg-[#023E33] p-4 rounded-[15px] mt-10">
              Vendredi 22 Juillet 2024
            </h2>
            <Groupe data={vendredi22} />
            <h2 className="text-white flex justify-center w-[fit-content] text-xl bg-[#023E33] p-4 rounded-[15px] mt-10">
              Samedi 23 Juillet 2024
            </h2>
            <Groupe data={samedi23} />
            <h2 className="text-white flex justify-center w-[fit-content] text-xl bg-[#023E33] p-4 rounded-[15px] mt-10">
              Dimanche 24 Juillet 2024
            </h2>
            <Groupe data={dimanche24} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};
