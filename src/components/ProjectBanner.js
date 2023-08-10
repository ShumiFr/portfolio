import React from "react";

const ProjectBanner = (props) => {
  return (
    <img className={props.className} src={props.imgSrc} alt={props.title} />
  );
};

export default ProjectBanner;
