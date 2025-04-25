import React, { useState } from "react";
import Header from "../components/Header";
import AboutPresentation from "../components/AboutPresentation";
import { LanguageList } from "../datas/LanguageList";
import CardSkill from "../components/CardSkill";
import { ToolsList } from "../datas/ToolsList";

// Définir l'ordre des niveaux
const levelOrder = {
  Débutant: 1,
  Intermédiaire: 2,
  Avancé: 3,
  Expert: 4,
};

function createCard(LanguageList) {
  return (
    <CardSkill
      key={LanguageList.id}
      title={LanguageList.title}
      image={LanguageList.logo}
      level={LanguageList.level}
    />
  );
}

function About() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeGallery, setActiveGallery] = useState("languages");

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);

    if (buttonNumber === 1) {
      setActiveGallery("languages");
    } else {
      setActiveGallery("tools");
    }
  };

  // Trier les listes par niveau
  const sortedLanguages = [...LanguageList].sort(
    (a, b) => levelOrder[b.level] - levelOrder[a.level]
  );
  const sortedTools = [...ToolsList].sort(
    (a, b) => levelOrder[b.level] - levelOrder[a.level]
  );

  return (
    <div>
      <Header />
      <AboutPresentation />
      <div className="skills">
        <div className="bar"></div>
        <h1>Compétences</h1>
      </div>
      <div className="button">
        <button
          className={`button ${activeButton === 1 ? "active" : ""}`}
          onClick={() => handleButtonClick(1)}
        >
          Langages
        </button>
        <button
          className={`button ${activeButton === 2 ? "active" : ""}`}
          onClick={() => handleButtonClick(2)}
        >
          Outils
        </button>
      </div>

      {activeGallery === "languages" && (
        <div className="gallery">{sortedLanguages.map(createCard)}</div>
      )}

      {activeGallery === "tools" && (
        <div className="gallery">{sortedTools.map(createCard)}</div>
      )}
    </div>
  );
}

export default About;
