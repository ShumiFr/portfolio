import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import FeaturedProjects from "../components/FeaturedProjects";
import { ProjectList } from "../datas/ProjectList";

const Portfolio = () => {
  // Filtrer les projets principaux (AlertesPedo et autres projets personnels)
  const featuredProjects = ProjectList.filter(
    (project) => project.title === "AlertesPedo" || project.isPersonal
  );

  // Filtrer les projets d'études
  const studyProjects = ProjectList.filter((project) => !project.isPersonal);

  return (
    <div>
      <Header />
      <div className="portfolio-container">
        <FeaturedProjects projects={featuredProjects} />

        <div className="study-projects">
          <h2>Projets d'Études</h2>
          <p>Découvrez les projets réalisés pendant ma formation</p>
          <div className="projects">
            <Gallery projects={studyProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
