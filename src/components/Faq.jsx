import { useState } from "react";

export const Faq = () => {
  const questionsReponse = [
    {
      id: 1,
      question: "Est il possible d'acheter des billets sur place?",
      reponse: "Oui, un point de vente sera présent à l'entrée du festival",
    },
    {
      id: 2,
      question:
        "Le site du festival ainsi que les activités sur place sont ils accessibles aux personnes en fauteuil roulant?",
      reponse:
        "Toute les infrastructures du festival ainsi que les activités sont accèssibles aux personnes à mobilité réduite",
    },
    {
      id: 3,
      question: "Y'a t'il de la restauration sur place?",
      reponse:
        "Plusieurs points de restaurations seront présents pendant toute la durée du festival, vous pourrez les retrouver grace à la carte présente sur notre application",
    },
    {
      id: 4,
      question:
        "Comment connaître à l'avance l'heure des concerts ainsi que les scènes sur lesquels ils auront lieu?",
      reponse:
        "En téléchargant notre application vous pourrez suivre heure par heure la programmation des concerts ainsi que les points de rencontre des artistes",
    },
  ];

  const [isOpen, setIsOpen] = useState([]);

  const toggleAnswer = (questionId) => {
    if (isOpen.includes(questionId)) {
      setIsOpen(isOpen.filter((element) => element !== questionId));
    } else {
      setIsOpen([...isOpen, questionId]);
    }
  };

  return (
    <div className="bg-black rounded-lg p-10 flex-col mt-10">
      <h1 className="text-[white] flex justify-center text-3xl">FAQ</h1>
      {questionsReponse.map((question) => (
        <div key={question.id}>
          <ul>
            <li className="text-[white] bg-[#023E33] p-2 rounded-lg w-[100%] relative mt-10 z-9 flex flex-row justify-center ">
              <button
                onClick={() => toggleAnswer(question.id)}
                className="flex flex-col items-center gap-3"
              >
                {question.question}
                <img
                  className={`w-6 ${
                    isOpen.includes(question.id)
                      ? "rotate-0 transition-transform ease-in-out duration-[0.4s]"
                      : "rotate-180 transition-transform ease-in-out duration-[0.4s]"
                  }`}
                  src="../public/images/angle-up-solid.svg"
                  alt="Image d'un chevron"
                />
              </button>
            </li>
            <li
              key={question.id}
              className={`transition-transform ease-in-out duration-[0.4s] delay-0 transform z-1
                ${
                  isOpen.includes(question.id)
                    ? "translate-y-0 "
                    : "-translate-y-full hidden"
                }`}
            >
              <p className="text-[white] bg-[#71A984] rounded-lg p-2">
                {question.reponse}
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
