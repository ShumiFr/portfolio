import React from "react";
import Details from "./Level";
import LanguageLogo from "./LanguageLogo";

function CardSkill(props) {
  return (
    <div className="card-skill">
      {" "}
      <LanguageLogo image={props.image} />
      <div className="title-and-level">
        <h2 className="title">{props.title}</h2>
        <Details level={props.level} />
      </div>
    </div>
  );
}

export default CardSkill;
