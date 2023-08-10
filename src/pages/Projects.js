import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { ProjectList } from "../datas/ProjectList"; // Assure-toi de corriger le chemin correctement
import { useParams } from "react-router-dom";
import ProjectTitle from "../components/ProjectTitle";

const Projects = () => {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === parseInt(id));

  return (
    <div>
      <Header />
      <div className="project-banner">
        <img
          className="img-banner"
          src={project.picture}
          alt={`${project.title} Banner`}
        />
      </div>
      <div className="description-zone">
        <div className="project-title-and-description">
          <ProjectTitle title={project.title} />
          <div className="skills-zone">
            <Skills skills={project.skills} />
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
