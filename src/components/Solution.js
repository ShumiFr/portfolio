import React from "react";

const Solution = (props) => {
  return (
    <div>
      <h2 className="solution-title">Solution</h2>
      <div className="solution-description">{props.solution}</div>
    </div>
  );
};

export default Solution;
