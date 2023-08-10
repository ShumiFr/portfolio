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
          picture={e.picture}
          description={e.description}
          skills={e.skills}
          github={e.github}
        />
      ))}
    </div>
  );
};

export default Gallery;
