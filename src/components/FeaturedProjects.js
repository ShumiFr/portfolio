import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="featured-projects">
      <h2>Projets Professionnels</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="carousel-content">
          <Link to={`/projet/${projects[currentIndex].id}`}>
            <img
              src={projects[currentIndex].picture}
              alt={projects[currentIndex].title}
              className="carousel-image"
            />
            <div className="carousel-info">
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
            </div>
          </Link>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
