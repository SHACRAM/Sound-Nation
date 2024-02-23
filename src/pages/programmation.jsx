import { Groupes } from "../components/Groupes";
import { useState, useEffect } from "react";

export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setposts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/posts/", {
      methode: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  });

  return <div></div>;
};
