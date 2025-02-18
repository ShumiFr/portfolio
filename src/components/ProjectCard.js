import React from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/img/github.png";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <Link to={`/projet/${props.id}`} style={{ textDecoration: "none" }}>
        {" "}
        <img className="project-img" src={props.minipicture} alt="projet" />
        <h1 className="title">{props.title}</h1>
        <div className="description">{props.description}</div>
        <div className="project-skills">{props.skills}</div>
      </Link>
      <a href={props.github} target="blank" className="project-github">
        <img src={GithubLogo} alt="github-logo" />
      </a>
    </div>
  );
};

export default ProjectCard;
