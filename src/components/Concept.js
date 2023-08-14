import React from "react";

const Concept = (props) => {
  return (
    <div className="concept-zone">
      <h2 className="concept-title">Concept</h2>
      <div className="concept-description">{props.concept}</div>
    </div>
  );
};

export default Concept;
