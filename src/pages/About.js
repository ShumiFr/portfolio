import React, { useState } from "react";
import Header from "../components/Header";
import AboutPresentation from "../components/AboutPresentation";
import { LanguageList } from "../datas/LanguageList";
import CardSkill from "../components/CardSkill";
import { ToolsList } from "../datas/ToolsList";

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
        <div className="gallery">{LanguageList.map(createCard)}</div>
      )}

      {activeGallery === "tools" && (
        <div className="gallery">{ToolsList.map(createCard)}</div>
      )}
    </div>
  );
}

export default About;
