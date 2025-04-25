import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import FeaturedProjects from "../components/FeaturedProjects";
import { ProjectList } from "../datas/ProjectList";

const Portfolio = () => {
  // Filtrer les projets professionnels
  const professionalProjects = ProjectList.filter(
    (project) => project.title === "AlertesPedo" || project.isPersonal
  );

  // Filtrer les projets personnels
  const personalProjects = ProjectList.filter((project) => !project.isPersonal);

  return (
    <div>
      <Header />
      <div className="portfolio-container">
        <FeaturedProjects projects={professionalProjects} />

        <div className="personal-projects">
          <h2>Projets Personnels</h2>
          <p>Découvrez mes projets personnels</p>
          <div className="projects">
            <Gallery projects={personalProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
