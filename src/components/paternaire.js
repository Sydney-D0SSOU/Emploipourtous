import React from 'react';
import './patenaire.css';

const PartenairesComponent = () => {
  return (
    <div className="partenaires-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="partenaires-title">Partenaires</h2>
          </div>
          <div className="col-12 col-md-6">
            <div className="partenaires-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartenairesComponent;
