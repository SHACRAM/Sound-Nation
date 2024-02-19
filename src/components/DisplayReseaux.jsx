const reseaux = [
  {
    name: "Facebook",
    path: "images/Facebook.svg",
    description: "icone de facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    path: "images/Twitter.svg",
    description: "icone de twitter",
    link: "https://www.twitter.com/",
  },
  {
    name: "Youtube",
    path: "images/Youtube.svg",
    description: "icone de youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    path: "images/Instagram.svg",
    description: "icone de instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Linkedin",
    path: "images/Linkedin.svg",
    description: "icone de linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Snapchat",
    path: "images/Snapchat.svg",
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
