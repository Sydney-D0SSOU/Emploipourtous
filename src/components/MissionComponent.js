import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import right from './powerwoman.jpg';

function MissionComponent() {
  const sectionStyle = {
    fontFamily: 'Avenir-Light',
    backgroundColor: 'rgb(11, 41, 59)', 
  };

  const titleStyle = {
    fontFamily: 'Oswald Medium',
    fontSize: '40px',
    color: 'rgb(254, 212, 0)',
  };

  const paragraphStyle = {
    fontSize: '30px',
    color: 'rgb(255, 255, 255)',
    padding: '20px',
  };

  const containerStyle = {
    maxWidth: '100%',
  };

  const imageStyle = {
    height: '717px', // Adjust the height as needed
    width: '100%', // Ensures the image maintains the full width of the column
    objectFit: 'cover', // Ensures the image covers the container proportionally
  };

  return (
    <div className="container mt-4" style={containerStyle}>
      <div className="row">
        <div className="col-lg-6">
          <div className="p-4" style={sectionStyle}>
            <h3 style={titleStyle}>Notre mission</h3>
            <p style={paragraphStyle}>
              L'Afrique dispose de la plus grande population de jeunes et pourtant manque de ressources humaines adéquates à son développement.
              La solution est donc une gestion plus éclairée des ressources humaines c'est à dire qui s'adapte à la personnalité, aux skills
              et aux connaissances de chaque personne.
            </p>
            <p style={paragraphStyle}>
              Nous voulons travailler à offrir à chacun une passion beaucoup plus qu'un travail, du bien être qu'une contrainte.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={right}
            alt="Right Column Image"
            className="img-fluid"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default MissionComponent;
