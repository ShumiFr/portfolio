import React from "react";

const Solution = (props) => {
  return (
    <div>
      <div className="solution-title">Solution</div>
      <div className="solution-description">{props.solution}</div>
    </div>
  );
};

export default Solution;
