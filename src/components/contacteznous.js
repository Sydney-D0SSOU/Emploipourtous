import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contacteznous.css';
import CircularProgress from '@mui/material/CircularProgress';
import {Dialog, DialogContent} from '@mui/material';
import Typography from '@mui/material/Typography';

const ContactezNous = () => {
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [email, setEmail] = useState('');
  const [noms, setNoms] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*const checkEmailExistence = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-emailsubmit-form', { email });
      return response.data.exists;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false;
    }
  };*/
  
  async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const fieldElements = form.querySelectorAll('input, textarea');
  const newErrors = {};
  let firstErrorField = null;

  fieldElements.forEach((field) => {
    if (!field.value) {
      newErrors[field.name] = true;
      if (!firstErrorField) {
        firstErrorField = field.name;
      }
    }
  });

  setErrors(newErrors);
  setFocusedField(firstErrorField);

  if (firstErrorField) {
    form.elements[firstErrorField].focus();
  } else {
    const formData = { email, noms, adresse, telephone, objet, message };

    try {
      const response = await axios.post('http://localhost:5000/api/check-emailsubmit-form', { email });

      if (response.data.exists) {
        setErrors({ ...newErrors, email: true });
        setFocusedField('email');
      } else {
        const submitResponse = await axios.post('http://localhost:5000/api/submit-form', formData);
        console.log('Success:', submitResponse.data);
        setSuccessMessage('Form successfully registered');
        setIsModalOpen(true);
        setNoms('');
        setTelephone('');
        setEmail('');
        setAdresse('');
        setObjet('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

  
  /*async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const fieldElements = form.querySelectorAll('input, textarea');
    const newErrors = {};
    let firstErrorField = null;

    fieldElements.forEach((field) => {
      if (!field.value) {
        newErrors[field.name] = true;
        if (!firstErrorField) {
          firstErrorField = field.name;
        }
      }
    });

    setErrors(newErrors);
    setFocusedField(firstErrorField);

    if (firstErrorField) {
      form.elements[firstErrorField].focus();
    } else {
      const isEmailExist = await checkEmailExistence(email);

      if (isEmailExist) {
        setErrors({ email: true });
        setFocusedField('email');
        return;
      }

      const formData = { email, noms, adresse, telephone, objet, message };

      try {
        const response = await axios.post('http://localhost:5000/api/submit-form', formData);
        console.log('Success:', response.data);
        setSuccessMessage('Form successfully registered');
        setIsModalOpen(true);
        setNoms('');
        setTelephone('');
        setEmail('');
        setAdresse('');
        setObjet('');
        setMessage('');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }*/

  function handleTelephoneChange(e) {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setTelephone(inputValue);
    } else if (inputValue === ' ') {
      setTelephone(inputValue);
    } else if (inputValue === '+') {
      setTelephone(inputValue);
    }
  }


  return (
  <div className="contact-container">
    <Container id="end" className="contact-container">
      <Row>
        
        <Col xs={12} md={6} className="contact-info">
          <h2 className="contact-title"> Pour toute préocupation, Contactez-nous </h2>
          <p>
            <br />
          </p>
        </Col>
      
        {isModalOpen && (
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <DialogContent>
                <Typography variant="body1">
                  {successMessage}
                </Typography>
              </DialogContent>
            </Dialog>
            )}
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="contact-details">
            <Row className="contact-row">
              <Col xs={12} sm={6} className={`contact-field ${errors.noms ? 'has-error' : ''}`}>
                <Form.Control
                  type="text"
                  id="noms"
                  name="noms"
                  placeholder="Noms"
                  onFocus={() => setFocusedField('noms')}
                  required
                  value={noms}
                  onChange={(e) => setNoms(e.target.value)}
                />
                {errors.noms && focusedField === 'noms' && (
                  <p className="error-message">Ce champ est requis.</p>
                )}
              </Col>
              <Col xs={12} sm={6} className="contact-field">
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="contact-row">
              <Col xs={12} sm={6} className="contact-field">
                <Form.Control
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Téléphone"
                  required
                  value={telephone}
                  onChange={handleTelephoneChange}
                />
              </Col>
              <Col xs={12} sm={6} className="contact-field">
                <Form.Control
                  type="text"
                  id="adresse"
                  name="adresse"
                  placeholder="Adresse"
                  required
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="contact-row">
              <Col xs={12} className="contact-field">
                <Form.Control
                  type="text"
                  id="objet"
                  name="objet"
                  placeholder="Objet"
                  required
                  value={objet}
                  onChange={(e) => setObjet(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="contact-row">
              <Col xs={12} className="contact-message">
                <Form.Control
                  as="textarea"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Redigez votre message ici"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="contact-row">
              <Col xs={12} className="contact-button">
               
                 <button type="submit" className="submit-button_rec" disabled={handleSubmit} startIcon={handleSubmit && <CircularProgress size={20} color="inherit"/>}>
                 Envoyer              </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactezNous;
