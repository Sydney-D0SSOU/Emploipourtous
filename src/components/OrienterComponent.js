import React from 'react';
import './orienter.css';

const OrientComponent = () => {
  return (
    <div className="container orient-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center orient-content">
          <h2 className="orient-text">Vous ne savez pas quel métier choisir ? </h2>
          <button className="btn btn-success orient-button">
            <a href="#end" className="read-more2 text-white">
              Être Orienter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrientComponent;
