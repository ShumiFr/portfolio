import React from "react";

const Problem = (props) => {
  return (
    <div>
      <h2 className="problem-title">Problème</h2>
      <div className="problem-description">{props.problem}</div>
    </div>
  );
};

export default Problem;
