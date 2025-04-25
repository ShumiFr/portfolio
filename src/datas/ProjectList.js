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
    isPersonal: false,
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
    isPersonal: false,
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
    isPersonal: false,
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
    isPersonal: false,
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
  {
    id: 5,
    title: "Ohmyfood",
    picture: "/ohmyfood/ohmyfood.png",
    minipicture: "/ohmyfood/miniOhmyfood.png",
    description:
      "Dynamisez une page web avec des animations CSS avec l'aide de Sass.",
    skills: [{ name: "HTML" }, { name: "CSS" }, { name: "Sass" }],
    github: "https://github.com/ShumiFr/Projet-3",
    isPersonal: false,
    concept:
      "Ohmyfood est une jeune startup qui voudrait s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris. Pour cela, je devais réaliser leur site en mobile first qui répertorie les menus des restaurants gastronomiques.",
    problem:
      "Il faut réaliser le site en mobile first et ajouter des animations CSS pour dynamiser le site.",
    solution: (
      <div>
        <p>
          J'ai d'abord commencer par mettre en place mon environnement de
          développement avec un repo github et une structure de projet contenant
          une page index.html, un dossier d'assets, un dossier pour le sass et
          un dossier pour y mettre toute les pages du site.
          <img src="/ohmyfood/code-initial.png" alt="Code de début de projet" />
        </p>
        <p>
          Ensuite j'ai créer la version mobile de la page d'accueil en
          respectant la maquette figma fourni.
          <img
            src="/ohmyfood/page-d'accueil-mobile.png"
            alt="Page d'accueil en version mobile"
          />
        </p>
        <p>
          J'ai ajouter par la suite les animations à la page d'accueil. J'ai
          utiliser sass pour créer des variables et des mixins pour faciliter la
          création des animations. Ce n'était pas obligatoire mais j'ai préféré
          utiliser sass pour m'entrainer.
          <img src="/ohmyfood/animations.gif" alt="Animations" />
        </p>
        <p>
          J'ai ensuite rajouter la page de restaurant, avec leur menu, le fait
          d'ajouter les plats que l'on souhaite et le bouton de confirmation.
          <img src="/ohmyfood/autrePage.gif" alt="Page restaurant" />
        </p>
        <p>
          Et pour finir l'ajout du responsive de toute les pages du site. Aussi
          bien en version mobile qu'en version desktop et tablette.
          <img src="/ohmyfood/testResponsive.gif" alt="Responsive" />
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "GameOn",
    picture: "/game-on/GameOn.png",
    minipicture: "/game-on/GameOn-Mini.png",
    description:
      "Création d'une landing page avec JavaScript pour une entreprise organisant des concours de jeux. Le projet se concentre sur la validation d'un formulaire d'inscription.",
    skills: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    github: "https://github.com/ShumiFr/GameOn-website-FR",
    isPersonal: false,
    concept:
      "GameOn est une PME spécialisée dans les conférences et les concours de jeux. Le projet consiste à compléter la partie Front-End d'une landing page, en se concentrant particulièrement sur la validation d'un formulaire d'inscription aux concours. Le site doit être interactif et offrir une expérience utilisateur fluide.",
    problem:
      "Le développeur précédent (Jason) a quitté l'entreprise avant d'avoir terminé le projet. Il a laissé la structure HTML et le style CSS, ainsi que le code JavaScript de base pour lancer la modale, mais le formulaire n'est pas encore fonctionnel. Il faut donc implémenter la validation du formulaire et assurer son bon fonctionnement.",
    solution: (
      <div>
        <p>
          J'ai commencé par analyser le code existant et les maquettes Figma
          pour comprendre la structure du projet. Ensuite, j'ai implémenté la
          validation du formulaire en JavaScript en suivant ces étapes :
          <img
            src="/game-on/form-validation.gif"
            alt="Validation du formulaire"
          />
        </p>
        <p>
          J'ai ajouté des validations pour chaque champ du formulaire : -
          Vérification du prénom et du nom (2 caractères minimum) - Validation
          de l'email (format correct) - Vérification de la date de naissance -
          Validation du nombre de participations aux tournois - Vérification de
          l'acceptation des conditions d'utilisation
        </p>
        <br />
        <p>
          J'ai également ajouté des messages d'erreur personnalisés pour guider
          l'utilisateur en cas de saisie incorrecte, et j'ai implémenté la
          soumission du formulaire une fois toutes les validations passées avec
          succès.
          <img src="/game-on/error-messages.gif" alt="Messages d'erreur" />
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "AlertesPedo",
    picture: "/alertesPedo/alertesPedo.png",
    minipicture: "/alertesPedo/alertesPedo.png",
    description:
      "Application web de lutte contre la pédophilie, permettant aux utilisateurs de signaler et de suivre les cas suspects.",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
    ],
    github: "https://github.com/ShumiFr/AlertesPedo",
    isPersonal: true,
    concept:
      "AlertesPedo est une plateforme de lutte contre la pédophilie qui permet aux utilisateurs de signaler des cas suspects, de suivre leur évolution et d'accéder à des ressources d'information.",
    problem:
      "La nécessité de créer une plateforme sécurisée et efficace pour la lutte contre la pédophilie, avec un système de signalement fiable et un suivi des cas.",
    solution: (
      <div>
        <p>
          Pour l'instant, j'ai créer la page d'accueil du site. Le backend est
          gérer par d'autre developpeurs, mais il est bien avancé.
        </p>
      </div>
    ),
  },
];
