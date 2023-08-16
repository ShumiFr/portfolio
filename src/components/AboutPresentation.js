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
            <font color="#FFE143">Pauline Gagnaire</font>. Je suis encore en
            formation, mais j'aspire à devenir une vrai{" "}
            <font color="#FFE143">Développeuse Web Front-end !</font> Pour moi,
            l'informatique n'est pas qu'un métier, c'est surtout une passion.
            J'adore coder malgré les difficultés et je ne lâche rien !<br />
            <br />
            <br />
            &emsp;&emsp;Dans ma formation, j'ai pu apprendre à réaliser
            plusieurs projets qui m'ont permis d'apprendre beaucoup de langage
            ainsi que tout les différents rôles d'un développeur web. J'y ai
            appris à faire du <font color="#FFE143">Front et du Back</font>, à
            faire de <font color="#FFE143">la gestion de projet </font>
            ainsi que du <font color="#FFE143">Débug et de l'optimisation</font>
            . Je pense avoir beaucoup à apprendre encore alors je persévérerai
            afin d'être une Développeuse Front-End ! <br></br>
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
