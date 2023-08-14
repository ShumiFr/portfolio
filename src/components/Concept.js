import React from "react";

const Concept = (props) => {
  return (
    <div className="concept-zone">
      <div className="concept-title">Concept</div>
      <div className="concept-description">{props.concept}</div>
    </div>
  );
};

export default Concept;
