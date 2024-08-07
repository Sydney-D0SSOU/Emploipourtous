import React, { useState } from 'react';
import axios from 'axios';
import api from './api'; // Importez l'instance Axios configurée
import './recruteur.css';
import DefaultNav from './DefaultNav';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Dialog, DialogContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Recruteur() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [Detail, setDetail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = { name, contact, email, sujet, localisation, Detail };
      const response = await api.post('/recruteur/create', formData);

      console.log('Success:', response.data);
      setSuccessMessage('Form successfully registered');
      setSignupError("");
      setIsModalOpen(true);
      setName('');
      setContact('');
      setEmail('');
      setSujet('');
      setLocalisation('');
      setDetail('');
    } catch (error) {
      console.error('Error:', error);
      setSignupError('Error signing up. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="recruteur">
        <DefaultNav />
        <h1 className="Rec_title">Recruteur</h1>
        <p className="Rec_para">
          Vous désirez recruter un profil bien précis ou vous souhaitez être accompagné dans un processus de recrutement, veuillez nous accorder un rendez-vous s'il vous plaît.
        </p>
        <Box height={20} />
        {isModalOpen && (
          <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <DialogContent>
              <Typography variant="body1">{successMessage}</Typography>
            </DialogContent>
          </Dialog>
        )}
        <Form onSubmit={handleSubmit}>
          <Container className="recruteur-form">
            <div className="left-form">
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label className="la">Entreprise*</Form.Label>
                    <Form.Control
                      className="inputstyle"
                      type="text"
                      placeholder="Entreprise"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="la">Contact téléphonique*</Form.Label>
                    <Form.Control
                      className="inputstyle"
                      type="text"
                      placeholder="Contact téléphonique"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="la">Email*</Form.Label>
                    <Form.Control
                      className="inputstyle"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="la">Sujet*</Form.Label>
                    <Form.Control
                      className="inputstyle"
                      type="text"
                      placeholder="Sujet"
                      required
                      value={sujet}
                      onChange={(e) => setSujet(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label className="la">Localisation*</Form.Label>
                    <Form.Control
                      className="inputstyle"
                      type="text"
                      placeholder="Localisation"
                      required
                      value={localisation}
                      onChange={(e) => setLocalisation(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="la">Détail de votre requête</Form.Label>
                    <Form.Control
                      className="inputstyle inputstyle1"
                      as="textarea"
                      placeholder="Détail de votre requête"
                      name="Detail"
                      required
                      value={Detail}
                      onChange={(e) => setDetail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            {signupError && <p className="error-message">{signupError}</p>}
            <Row>
              <Col>
                <button type="submit" className="submit-button_rec" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoyer...' : 'Envoyer'}
                </button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
}

export default Recruteur;
