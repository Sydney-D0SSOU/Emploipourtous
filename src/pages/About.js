import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../components/api';
import { Box } from "@mui/material";
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";

export default function AddAgency() {
  const [localisation, setLocalisation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idAdmin, setIdAdmin] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }
  }, [navigate, token]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const agenceData = { Localisation: localisation, email, password, idAdmin };
      const response = await api.post('agence/create', agenceData);
      if (response.status === 201) {
        setSuccessMessage('Agence créée avec succès !');
        setErrorMessage('');
        // Réinitialiser le formulaire
        setLocalisation('');
        setEmail('');
        setPassword('');
        setIdAdmin('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Une erreur est survenue lors de la création de l\'agence.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container mt-5">
            <h1>Créer une Agence</h1>
            <form className="row g-3" onSubmit={handleFormSubmit}>
              <div className="col-md-6">
                <label htmlFor="localisation" className="form-label">Localisation:</label>
                <select
                  id="localisation"
                  value={localisation}
                  onChange={(e) => setLocalisation(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Sélectionnez une localité</option>
                  <option value="Cotonou">Cotonou</option>
                  <option value="Porto-Novo">Porto-Novo</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Adresse Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Mot de Passe:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="idAdmin" className="form-label">ID Administrateur:</label>
                <input
                  type="text"
                  id="idAdmin"
                  value={idAdmin}
                  onChange={(e) => setIdAdmin(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">Créer une Agence</button>
              </div>
            </form>

            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </div>
        </Box>
      </Box>
    </>
  );
}
