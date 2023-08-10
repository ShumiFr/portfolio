import booki from "../assets/img/booki.png";
import portfolioSophieBluel from "../assets/img/Sophie-Bluel.PNG";
import kasa from "../assets/img/Kasa.PNG";
import monVieuxGrimoire from "../assets/img/mon-vieux-grimoire.PNG";

export const ProjectList = [
  {
    id: 1,
    title: "Booki",
    picture: booki,
    description:
      "Il s'agit de mon tout premier projet. J'y ai créer la page d'accueil d'une agence de voyage avec HTML et CSS.",
    skills: "HTML, CSS",
    github: "https://github.com/ShumiFr/Booki.git",
  },
  {
    id: 2,
    title: "Portfolio Sophie Bluel",
    picture: portfolioSophieBluel,
    description:
      "J'ai réalisé le Javascript de ce site. Je devais réaliser un site web dynamique. Il s'agit du premier projet sur lequel j'ai travaillé avec une API.",
    skills: "JavaScript, NodeJS",
    github: "https://github.com/ShumiFr/Portfolio-architecte-sophie-bluel.git",
  },
  {
    id: 3,
    title: "Kasa",
    picture: kasa,
    description:
      "Le projet que j'ai préféré faire. Je devais réaliser entièrement un site web de location immobilière avec React.",
    skills: "ReactJs, Sass",
    github: "https://github.com/ShumiFr/Kasa.git",
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire",
    picture: monVieuxGrimoire,
    description:
      "Il s'agit d'un site de location de livre. Je devait y créer le backend de zéro avec l'aide de NodeJS",
    skills: "NodeJs, MongoDB, Multer, JWT, Bcrypt",
    github: "https://github.com/ShumiFr/Mon-Vieux-Grimoire.git",
  },
];
