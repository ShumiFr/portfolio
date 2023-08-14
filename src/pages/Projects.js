import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { ProjectList } from "../datas/ProjectList"; // Assure-toi de corriger le chemin correctement
import { useParams } from "react-router-dom";
import ProjectTitle from "../components/ProjectTitle";
import Concept from "../components/Concept";
import Problem from "../components/Problem";
import Solution from "../components/Solution";

const Projects = () => {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === parseInt(id));

  return (
    <div>
      <Header />
      <div class="study">
        <div className="project-title-and-description">
          <ProjectTitle title={project.title} />
          <p className="project-description">{project.description}</p>
          <div className="skills-zone">
            <Skills skills={project.skills} />
          </div>
        </div>
        <div className="project-banner">
          <img
            className="img-banner"
            src={project.picture}
            alt={`${project.title} Banner`}
          />
        </div>
        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"> Voir sur GitHub</i>
        </a>
        <div className="study-body">
          <Concept concept={project.concept} />
          <Problem problem={project.problem} />
          <Solution solution={project.solution} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
