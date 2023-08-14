import React from "react";

const Skills = (props) => {
  return (
    <div className="tag-skills">
      {props.skills.map((skill, index) => (
        <span key={index} className={`skill`}>
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default Skills;
