import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="past-project-experience">
        <h1>Expérience de projet passé</h1>
        <p>Découvrez les projets sur lesquels j'ai travaillé jusqu'à présent</p>
      </div>
      <div className="projects">
        <Gallery />
      </div>
    </div>
  );
};

export default Portfolio;
