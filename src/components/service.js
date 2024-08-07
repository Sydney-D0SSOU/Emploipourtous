import React, { useState } from 'react';
import axios from 'axios';
import './service.css';
import {Dialog, DialogContent} from '@mui/material';
import service from './reunion_2.jpg';
import reunion from './service.jpg';
import stage from './stage.jpg';
import gestion from "./gestion.jpg";
import DefaultNav from './DefaultNav';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContactezNous from './contacteznous';

const Services = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/send_request', {
        firstName,
        lastName,
        email,
      });

      if (response.status === 200) {
        setSuccessMessage('Request sent successfully!');
        setErrorMessage('');
        setFirstName('');
        setIsModalOpen(true);
        setLastName('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending the request.');
      setSuccessMessage('');
    }
  };

  return (
  <>
       <div className="container">
    <DefaultNav />
    <h2 className="text-center mt-4">Services proposés</h2>
    <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="service-item position-relative">
          <div className="image-overlay">
            <span className="overlay-text">Test d'aptitude TA</span>
          </div>
           <a href="/reservation">
          <img src={reunion} alt="Service 1" className="img-fluid" />
           </a>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="service-item position-relative">
          <div className="image-overlay">
            <span className="overlay-text">Orientation Professionnelle OPE</span>
          </div>
           <a href="/reservation">
          <img src={service} alt="Service 2" className="img-fluid" />
           </a>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="service-item position-relative">
          <div className="image-overlay">
            <span className="overlay-text">Stages Débouchant sur Contrat SDC</span>
          </div>
           <a href="/reservation">
          <img src={stage} alt="Additional Service 1" width="100%" className="img-fluid" />
           </a>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="service-item position-relative">
          <div className="image-overlay">
            <span className="overlay-text">Gestion de carrière en Emploi GCE</span>
          </div>
           <a href="/reservation">
          <img src={gestion} alt="Additional Service 2" width="100%" className="img-fluid" />
           </a>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
        <div className="service_propose text-center">
          <h1 className="service-title">Obtenir un devis gratuitement</h1>
          <p className="service-para">un besoin particulier, une mission urgente, un service dans les plus brefs délais</p>
        </div>
      </div>
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
       <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
        <div className="service-form">
      <form onSubmit={handleFormSubmit}>
         <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Nom:</label>
              <input type="text" id="firstName" name="firstName" value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Nom de famille:</label>
              <input type="text" id="lastName" name="lastName" value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required className="form-control" />
            </div>

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>

      {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}
    </div>
     </div>
      </div>
      </div>
       <ContactezNous />
      </>
  );
};

export default Services;

