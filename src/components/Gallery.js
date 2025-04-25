import React from "react";
import ProjectCard from "./ProjectCard";

const Gallery = ({ projects }) => {
  return (
    <div className="project-gallery">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          minipicture={project.minipicture}
          description={project.description}
          skills={project.skills.map((skill) => skill.name).join(", ")}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default Gallery;
