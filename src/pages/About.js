import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from "@mui/material";
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";


export default function About() {
	
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [zone, setZone] = useState('');
  const navigate = useNavigate();
 const token = localStorage.getItem('token');
 
 useEffect(() => {
	  
	/*  if (!token) {
      navigate('/Login');
      return;
    }*/
    }, [navigate, token]);

 const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { username, password, role, zone, email };
      const response = await axios.post('http://localhost:5000/api/add_admin', userData);
      if (response.status === 200) {
        console.log('User signed up successfully');
      }
      console.log(email);
      setSuccessMessage('Administrator added successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while adding the administrator.');
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
      <h1>Add Administrator</h1>
      <form className="row g-3" onSubmit={handleFormSubmit}>
        <div className="col-md-6">
          <label htmlFor="adminName" className="form-label">Administrator Name:</label>
          <input
            type="text"
            id="adminName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="adminRole" className="form-label">Administrator Role:</label>
          <select
            id="adminRole"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Role</option>
            <option value="Agence">Agence</option>
            <option value="chef_de_quatier">Chef de Quatier</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="adminLocalite" className="form-label">Administrator Locality:</label>
          <select
            id="adminLocalite"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Locality</option>
            <option value="Cotonou">Cotonou</option>
            <option value="Porto-Novo">Porto-Novo</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="adminPassword" className="form-label">Password:</label>
          <input
            type="password"
            id="adminPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        {<div className="col-md-6">
          <label htmlFor="adminmail" className="form-label">Adresse Mail:</label>
          <input
            type="email"
            id="adminmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>}

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Admin</button>
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
