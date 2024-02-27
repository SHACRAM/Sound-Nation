import { Groupe } from "../components/Groupe";
import { useState, useEffect } from "react";

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
        console.log(jsonData);
        setData(jsonData.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((groupe) => (
          <Groupe
            key={groupe.id}
            name={groupe.attributes.nom}
            day={groupe.attributes.jour}
            image={groupe.attributes.Image.data.attributes}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
