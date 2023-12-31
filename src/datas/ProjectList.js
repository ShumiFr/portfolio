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
    picture: "/sophie-bluel/SophieBluelPortfolio.png",
    minipicture: "/sophie-bluel/MiniBanner.png",
    description:
      "J'ai réalisé le Javascript de ce site. Je devais réaliser un site web dynamique. Il s'agit du premier projet sur lequel j'ai travaillé avec une API.",
    skills: [{ name: "JavaScript" }, { name: "NodeJs" }],
    github: "https://github.com/ShumiFr/Portfolio-architecte-sophie-bluel.git",
    concept:
      "Il s'agit d'un portfolio de Sophie Bluel comprenant une galerie avec les projets de la photographe. Il est possible de les trier par types. La photographe, de son côté peut se connecter et rajouter des projets comme elle veux",
    problem:
      "Il faut connecter l'API au site afin de récupérer les projets et il faut aussi créer une page de connection afin de pouvoir ajouter de nouveau projet si on est connecter avec le compte de Sophie Bluel",
    solution: (
      <div>
        <p>
          Tous d'abord, je devais faire en sorte de récupérer les données de
          l'API. Pour ce faire j'ai utiliser la méthode <strong>fetch</strong>{" "}
          de Javascript qui permet de les récupérer dynamiquement.
          <img src="/sophie-bluel/Projets.PNG" alt="projets" />
        </p>
        <p>
          Ensuite il fallait créer les différents filtres à partir d'un id
          commun pour chaque projet du même type.
          <img src="/sophie-bluel/Filtres.gif" alt="filtres" />
        </p>
        <p>
          Ensuite j'ai créer la page de connection et j'ai pus me connecter
          grâce au identifiant de Sophie Bluel et au token JWT qui m'assure
          l'authentification.
          <img src="/sophie-bluel/Login.gif" alt="login" />
        </p>
        <p>
          Et enfin comme vous avez pus le voir lorsque la connection est reussi,
          il est possible d'ouvir une modale afin de rajouter des projets.
          <img src="/sophie-bluel/AjoutProjet.gif" alt="AjoutProjet" />
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Kasa",
    picture: "/kasa/Banner.png",
    minipicture: "/kasa/MiniBanner.png",
    description:
      "Le projet que j'ai préféré faire. Je devais réaliser entièrement un site web de location immobilière.",
    skills: [{ name: "React" }, { name: "Sass" }],
    github: "https://github.com/ShumiFr/Kasa.git",
    concept:
      "Kasa est une application web de location immobilière, le site a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.",
    problem:
      "L'application doit être refaite de zéro avec React à partir des maquettes figma et des contraintes fonctionnelles",
    solution: (
      <div>
        <p>
          J'ai tout d'abord créer l'application réact grâce à{" "}
          <em>Create-react-app</em> et installer les dépendances nécéssaire
          comme <em>React Router</em> qui permet de naviguer entre les
          différentes pages de l'application dynamiquement. J'ai donc créer les
          différentes pages de l'applications et les ai relié avec React Router.
          <img src="/kasa/ReactRouter.gif" alt="ReactRouter" />
        </p>
        <p>
          Ensuite je me suis attaquer à la page d'accueil, en réalisant les
          différents composant comme la banniere et les cartes. Composants
          réutilisables !
          <img src="/kasa/Accueil.png" alt="accueil" />
        </p>
        <p>
          Ensuite création de la page A propos, avec des collapse qui permettent
          d'afficher les différentes informations sur le site.
          <img src="/kasa/About.png" alt="A Propos" />
        </p>
        <p>
          Pour les différents probleme du site, il fallait créer une page
          d'erreur. Par exemple, si une mauvais URL est rentrer alors la page
          d'erreur est envoyer
          <img src="/kasa/Erreur.gif" alt="Page d'erreur" />
        </p>
        <p>
          Pour finir, nous pouvez nous occupez de la page des logements. Il
          fallait créer un carousel des différentes images des logements ainsi
          que toute les informations du logements comme les équipements, la
          note, les tags, etc ...
          <img src="/kasa/Hébergements.png" alt="Hébergement" />
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire",
    picture: "/mon-vieux-grimoire/Banner.png",
    minipicture: "/mon-vieux-grimoire/MiniBanner.png",
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
    concept:
      "Booki est un site, enfin une page d'accueil, qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
    problem:
      "Comme il s'agit de mon premier projet, le problème était que le site n'avez pas de page d'accueil. Je devait donc réaliser une page d'accueil en suivant une maquette, réalisé au préalable sur Figma, avec HTML et CSS.",
    solution: (
      <div>
        <p>
          J'ai d'abord commencer par créer un serveur Express simple avec
          NodeJs, puis j'ai créer une api Restful avec MongoDB. Après avoir
          créer tous ça j'ai commencer à mettre en place un système
          d'authentification avec bcrypt pour crypter les données et JWT pour
          authentifier les requêtes. Après tous cela, il est désormais possible
          de se connecter afin d'ajouter un livre à la base de données.
          <img src="/mon-vieux-grimoire/AjoutLivre.gif" alt="Ajout de livre" />
        </p>
        <p>
          Maintenant que l'on peut se connecter et enregistrer un livre dans la
          base de données il faudrait faire en sorte de les notés et de
          récupérer les 3 meilleurs livres notés
          <img src="/mon-vieux-grimoire/Notation.gif" alt="hébergements" />
        </p>
      </div>
    ),
  },
];
