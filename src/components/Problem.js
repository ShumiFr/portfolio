import React from "react";

const Problem = (props) => {
  return (
    <div>
      <div className="problem-title">Problème</div>
      <div className="problem-description">{props.problem}</div>
    </div>
  );
};

export default Problem;
