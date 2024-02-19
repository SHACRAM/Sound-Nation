export const Faq = () => {
  const questionsReponse = [
    {
      question: "Sera t'il possible d'acheter des billets sur place?",
      reponse: "Oui, un point de vente sera présent à l'entrée du festival",
    },
    {
      question:
        "Le site du festival ainsi que les activités sur place sont ils accessibles aux personnes en fauteuil roulant?",
      reponse:
        "Toute les infrastructures du festival ainsi que les activités sont accèssibles aux personnes à mobilité réduite",
    },
    {
      question: "Y'a t'il de la restauration sur place?",
      reponse:
        "Plusieurs points de restaurations seront présents pendant toute la durée du festival, vous pourrez les retrouver grace à la carte présente sur notre application",
    },
    {
      question:
        "Comment connaître à l'avance l'heure des concerts ainsi que les scènes sur lesquels ils auront lieu?",
      reponse:
        "En téléchargant notre application vous pourrez suivre heure par heure la programmation des concerts ainsi que les points de rencontre des artistes",
    },
  ];

  return (
    <div className="bg-black rounded-lg p-10 flex-col mt-10">
      {questionsReponse.map((question) => (
        <>
          <button className="text-[white] bg-[#023E33] p-2 rounded-lg">
            {question.question}
          </button>
          <p className="text-[white] bg-[#71A984]">{question.reponse}</p>
        </>
      ))}
    </div>
  );
};
