import React from "react";
import Logo from "./Logo";

const HomePresentation = () => {
  return (
    <div className="home-presentation-and-logo">
      <div className="home-presentation">
        <p>Hello World !</p>
        <h1>Pauline Gagnaire</h1>
        <div className="typewriter">Développeuse Web Front-End</div>
        <p>De Pâtissière à Développeuse découvrez mon aventure</p>
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default HomePresentation;
