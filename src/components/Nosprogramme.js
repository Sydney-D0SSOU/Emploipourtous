import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css';

function Nosprogramme() {
  const titleh2 = {
    fontSize: '50px',
    fontFamily: 'Oswald Medium',
  };

  const cardStyle = {
    backgroundColor: '#f8f9fa', // Light background color for cards
    borderRadius: '10px', // Rounded corners
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 style={titleh2}>Nos Services</h2>
          <Carousel>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-6">
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: '36px', fontFamily: 'Arial' }}>TA</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '24px', fontFamily: 'Verdana' }}>Test d'aptitude </Card.Subtitle>
                      <Card.Text style={{ fontSize: '22px', fontFamily: 'Georgia' }}>
                        Utile pour prouver que vous cumulez les aptitudes et les qualifications minimums pour un poste.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6">
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: '36px', fontFamily: 'Arial' }}>CQP</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '24px', fontFamily: 'Verdana' }}>Certificat de Qualification Professionnelle</Card.Subtitle>
                      <Card.Text style={{ fontSize: '22px', fontFamily: 'Georgia' }}>
                        Utile pour prouver que vous avez un haut niveau de satisfaction client sur votre prestation.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-6">
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: '36px', fontFamily: 'Arial' }}>GCE</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '24px', fontFamily: 'Verdana' }}>Gestion de carrière en emploi</Card.Subtitle>
                      <Card.Text style={{ fontSize: '22px', fontFamily: 'Georgia' }}>
                      pour vous aider à devenir et rester un bon
                      employé                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6">
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: '36px', fontFamily: 'Arial' }}>OPE</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '24px', fontFamily: 'Verdana' }}>Orientation Professionnelle et Éducationnelle</Card.Subtitle>
                      <Card.Text style={{ fontSize: '22px', fontFamily: 'Georgia' }}>
                      Pour vous orienter vers le domaine le
                          </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
               
                <div className="col-lg-6">
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: '36px', fontFamily: 'Arial' }}>SDC
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '24px', fontFamily: 'Verdana' }}>Stages débouchants contrat</Card.Subtitle>
                      <Card.Text style={{ fontSize: '22px', fontFamily: 'Georgia' }}>
                      pour vous trouver l'emploi de votre choix
                      grâces à un stage professionne                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Nosprogramme;
