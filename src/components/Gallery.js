import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectList } from "../datas/ProjectList";

const Gallery = () => {
  return (
    <div className="project-gallery">
      {ProjectList.map((e) => (
        <ProjectCard
          key={e.id}
          id={e.id}
          title={e.title}
          minipicture={e.minipicture}
          description={e.description}
          skills={e.skills.map((skill) => skill.name).join(", ")} // Utilisation de .join()
          github={e.github}
        />
      ))}
    </div>
  );
};

export default Gallery;
