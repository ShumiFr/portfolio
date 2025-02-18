import React from "react";
import Logo from "./Logo";
import CV from "../assets/CV.pdf";

const AboutPresentation = () => {
  return (
    <div className="about-presentation">
      <div className="about">
        <div className="about-me">
          <h1>A propos de moi</h1>
          <div className="bar"></div>
        </div>
        <div className="logo-and-presentation">
          <Logo />
          <div className="presentation">
            &emsp;&emsp;Bonjour tout le monde ! Je m'appelle{" "}
            <font color="#FFE143">Pauline Gagnaire</font>. Je suis désormais
            détentrice du titre de{" "}
            <font color="#FFE143">
              Développeuse d'Applications - JavaScript React
            </font>
            . L'informatique n'est pas seulement mon métier, c'est avant tout
            une passion. J'adore coder et relever de nouveaux défis !<br />
            <br />
            <br />
            &emsp;&emsp;Au cours de ma formation, j'ai réalisé plusieurs projets
            qui m'ont permis d'acquérir de solides compétences en développement
            web. J'ai appris à maîtriser le{" "}
            <font color="#FFE143">Front-end et le Back-end</font>, à gérer des
            projets, ainsi qu'à effectuer du{" "}
            <font color="#FFE143">débogage et de l'optimisation</font>. Je suis
            toujours en quête de nouvelles connaissances et je suis déterminée à
            continuer à progresser en tant que Développeuse Front-End !{" "}
            <br></br>
            <br></br>
            <a className="cv" href={CV} target="_blank" rel="noreferrer">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPresentation;
