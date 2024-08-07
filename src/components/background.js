import React from 'react';
import backgroundImage from './../istockphoto-1256603011-612x612.jpg'; 
import './background.css';
function BackgroundSection() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-white">
            <h1 className="hero-title">Travailler ou Recruter</h1>
            <p className="hero-text">
              L'outil le plus simple pour le recrutement et la carrière.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
