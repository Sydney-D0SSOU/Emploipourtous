import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './avis.css';

function QuelquesAvis() {
  return (
    <Container className="Avis">
      <h2 className="title_av">Quelques Avis</h2>
      <Row className="Avis-list">
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <h3 className="quelque-title">``</h3>
              <p className="quelque-usage">
                « J’ai utilisé l’offre de emploi pour tous, je suis aujourd’hui en CDD avec un bon salaire dans une entreprise dans ma zone à un poste que j'aime vraiment»
              </p>
              <p className="read-more_av">Ruth O.</p>
              <p className="read-more1"> Responsable</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <h3 className="quelque-title">``</h3>
              <p className="quelque-usage">
                «Infiniment merci de m’avoir aidé à trouver un emploi aussi rapidement. J'ai recommandé vivement ce cabinet pour tous ceux qui recherchent de l’emploi autour de moi.»
              </p>
              <p className="read-more_av">Richmonde G. </p>
              <p className="read-more1"> Responsable Clientèle </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <h3 className="quelque-title">``</h3>
              <p className="quelque-usage">
                En passant par le recrutement de cette plateforme, et en tenant compte des politiques d’entreprise, ils ont su nous conseiller nous guider et surtout nous assister.
              </p>
              <p className="read-more_av">Samirath B.</p>
              <p className="read-more1">SSM</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuelquesAvis;
