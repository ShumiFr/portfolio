import portfolioSophieBluel from "../assets/img/Sophie-Bluel.PNG";
import kasa from "../assets/img/Kasa.PNG";
import monVieuxGrimoire from "../assets/img/mon-vieux-grimoire.PNG";

export const ProjectList = [
  {
    id: 1,
    title: "Booki",
    minipicture: "/booki/MiniBooki.png",
    picture: "/booki/booki.png",
    description:
      "Il s'agit de mon tout premier projet. J'y ai créé la page d'accueil d'une agence de voyage.",
    skills: [{ name: "HTML" }, { name: "CSS" }], // Utilisation d'un tableau pour les compétences
    github: "https://github.com/ShumiFr/Booki.git",
    concept:
      "Booki est un site, enfin une page d'accueil, qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
    problem:
      "Comme il s'agit de mon premier projet, le problème était que le site n'avez pas de page d'accueil. Je devait donc réaliser une page d'accueil en suivant une maquette, réalisé au préalable sur Figma, avec HTML et CSS.",
    solution: (
      <div>
        <p>
          J'ai tout d'abord créer le Header avec la Navigation ainsi que le
          formulaire de recherche de ville avec des filtres également en dessous
          <img src="/booki/header.PNG" alt="header" />
        </p>
        <p>
          J'ai ensuite rajouter l'élément principal du projet c'est à dire les
          hébergements ainsi que les hébergements les plus populaires.
          <img src="/booki/Hebergements.PNG" alt="hébergements" />
          En dessous de ça j'ai créer la partie des activités
          <img src="/booki/Activités.PNG" alt="activités" />
        </p>
        <p>
          Et enfin j'ai fini par créer le footer
          <img src="/booki/Footer.PNG" alt="footer" />
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Portfolio Sophie Bluel",
    picture: portfolioSophieBluel,
    description:
      "J'ai réalisé le Javascript de ce site. Je devais réaliser un site web dynamique. Il s'agit du premier projet sur lequel j'ai travaillé avec une API.",
    skills: [{ name: "JavaScript" }, { name: "NodeJs" }],
    github: "https://github.com/ShumiFr/Portfolio-architecte-sophie-bluel.git",
  },
  {
    id: 3,
    title: "Kasa",
    picture: kasa,
    description:
      "Le projet que j'ai préféré faire. Je devais réaliser entièrement un site web de location immobilière.",
    skills: [{ name: "React" }, { name: "Sass" }],
    github: "https://github.com/ShumiFr/Kasa.git",
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire",
    picture: monVieuxGrimoire,
    description:
      "Il s'agit d'un site de location de livre. Je devais y créer le backend de zéro",
    skills: [
      { name: "NodeJs" },
      { name: "MongoDB" },
      { name: "Multer" },
      { name: "JWT" },
      { name: "BCrypt" },
    ],
    github: "https://github.com/ShumiFr/Mon-Vieux-Grimoire.git",
  },
];
