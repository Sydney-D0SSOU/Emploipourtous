import React, { useState } from 'react';
import api from './api'; // Importez l'instance Axios configurée
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DefaultNav from './DefaultNav';
import './travailler.css';
import { Dialog, DialogContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Travailler = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [datenaiss, setDatenaiss] = useState('');
  const [phone, setPhone] = useState('');
  const [jourdispo, setJourdispo] = useState('');
  const [cv, setCv] = useState(null); // Handle file upload
  const [locality, setLocality] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('prenom', prenom);
      formData.append('email', email);
      formData.append('datenaiss', datenaiss);
      formData.append('phone', phone);
      formData.append('jourdispo', jourdispo);
      formData.append('locality', locality);

      if (cv) {
        formData.append('cv', cv); // Add the file to the form data
      }

      const response = await api.post('/candidat/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Success:', response.data);
      setSuccessMessage('Form successfully registered');
      setSignupError('');
      setIsModalOpen(true);

      // Reset state
      setNom('');
      setPrenom('');
      setDatenaiss('');
      setPhone('');
      setEmail('');
      setJourdispo('');
      setCv(null);
      setLocality('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSignupError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="background-container">
      <DefaultNav />
      <Row>
        <Col xs={12} md={6} className="blue-section">
          <div className="blue-content">
            <h2 className="blue-title">
              <span className="title-highlight">TRAVAILLER</span>
            </h2>
            <p className="travailler-text">
              Vous recherchez un emploi proche de votre domicile, veuillez remplir le formulaire ci-joint.
            </p>
          </div>
          <Box height={20} />
          {isModalOpen && (
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <DialogContent>
                <Typography variant="body1">
                  {successMessage}
                </Typography>
              </DialogContent>
            </Dialog>
          )}
        </Col>

        <Col xs={12} md={6} className="white-section">
          <Form onSubmit={handleSubmit}>
            <div className="travailler-form">
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>NOM *</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="text"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date de naissance*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="date"
                      required
                      value={datenaiss}
                      onChange={(e) => setDatenaiss(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Numero de téléphone*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Prenom*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="text"
                      required
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Localité*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="text"
                      required
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Disponibilité*</Form.Label>
                    <Form.Control className="inputstyle2"
                      type="date"
                      required
                      value={jourdispo}
                      onChange={(e) => setJourdispo(e.target.value)}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Parcours Professionnel</Form.Label>
                    <Form.Control
                      className="inputstyle2"
                      type="file"
                      required
                      onChange={(e) => setCv(e.target.files[0])}
                      style={{ border: '2px solid black' }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={12} className="submit-button">
                <Button type="submit" className="submit-button_rec" disabled={isSubmitting}>
                  {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Envoyer'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Travailler;
