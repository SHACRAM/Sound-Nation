const reseaux = [
  {
    name: "Facebook",
    path: "images/IconeFacebook.png",
    description: "icone de facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    path: "images/IconeX.png",
    description: "icone de twitter",
    link: "https://www.twitter.com/",
  },
  {
    name: "Youtube",
    path: "images/IconeYoutube.png",
    description: "icone de youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    path: "images/IconeInstagram.png",
    description: "icone de instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Linkedin",
    path: "images/IconeLinkedin.png",
    description: "icone de linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Snapchat",
    path: "images/IconeSnapchat.png",
    description: "icone de snapchat",
    link: "https://www.snapchat.com/",
  },
];
export const DisplayReseaux = () => {
  return (
    <div className="bg-black flex flex-wrap gap-8 justify-center p-5 rounded-lg">
      {reseaux.map((reseau) => (
        <a href={reseau.link} target="blank" key={reseau.name}>
          <img src={reseau.path} alt={reseau.description} />
        </a>
      ))}
      ;
    </div>
  );
};
