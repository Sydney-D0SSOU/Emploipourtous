import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../components/Admin/sidebar";
import { Box } from "@mui/material";
import Navbar from "../components/Admin/Navbar";
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const cellStyle = {
  borderRight: 'none',
  borderLeft: 'none',
};

const tableContainerStyle = {
  maxHeight: '400px',
  overflowY: 'auto',
  marginBottom: '20px',
};

export default function List() {
	
  const [travaillerData, setTravaillerData] = useState([]);
  const [recruterData, setRecruterData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
   /* if (!token) {
      navigate('/Login');
      return;
    }*/

    axios
      .get('http://localhost:5000/api/all_recruter_users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRecruterData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
    axios
      .get('http://localhost:5000/api/all_users', {})
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
    axios
      .get('http://localhost:5000/api/all_job_users', {})
      .then((response) => {
        setTravaillerData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  }, [navigate, token]);
    return (
        <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
		 <h1 className="Admin_title">List of all Users</h1>
			  <div className="container-fluid">
				<div className="row">
				  <div className="col-12">
					<p className="Ent">All Entreprise</p>
					<div className="travail_section">
				 <TableContainer component={Paper} sx={{ borderRadius: '20px', ...tableContainerStyle }}>
					  <Table>
						<TableHead sx={{ backgroundColor: 'grey' }}>
						  <TableRow>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Nom de L'entreprise</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Email</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Telephone</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Sujet</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Detail de Requete</TableCell>
						  </TableRow>
						</TableHead>
						<TableBody>
						  {recruterData.map((row) => (
							<TableRow key={row.id}>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.entreprise}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.email}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.contact_telephonique}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.sujet}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.detail_requete}
							  </TableCell>
							</TableRow>
						  ))}
						</TableBody>
					  </Table>
					</TableContainer>
					</div>
				  </div>
				  <div className="col-12">
					<p className="Ent">All Employee</p>
					<div className="travail_section">
					  <TableContainer component={Paper} sx={{ borderRadius: '20px', ...tableContainerStyle }}>
					  <Table>
						<TableHead sx={{ backgroundColor: 'grey' }}>
						  <TableRow>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Nom</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Prenoms</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Email</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Date de Naissance</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Telephone</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Disponibilité</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Type d'emploi</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Pacours Professionnel</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Zone</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Localite</TableCell>
						  </TableRow>
						</TableHead>
						<TableBody>
						  {travaillerData.map((row) => (
							<TableRow key={row.id}>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.nom}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.prenoms}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.email}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.date_naissance}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.numero_telephone}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.disponibilite}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.type_emploi}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.parcours}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.Zone}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.Localite}
							  </TableCell>
							</TableRow>
						  ))}
						</TableBody>
					  </Table>
					</TableContainer>
					</div>
				  </div>
				  <div className="col-12">
					<p className="Ent">Contact Form</p>
					<div className="travail_section">
					  <TableContainer component={Paper} sx={{ borderRadius: '20px', ...tableContainerStyle }}>
					  <Table>
						<TableHead sx={{ backgroundColor: 'grey' }}>
						  <TableRow>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Nom de L'entreprise</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Adresse Mail</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Telephone</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Adresse</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Objet</TableCell>
							<TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Sujet</TableCell>
						  </TableRow>
						</TableHead>
						<TableBody>
						  {contactData.map((row) => (
							<TableRow key={row.id}>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.noms}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.email}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								{row.telephone}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.adresse}
							  </TableCell>
							  <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.objet}
							  </TableCell>
							   <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
								  {row.message}
							  </TableCell>
							</TableRow>
						  ))}
						</TableBody>
					  </Table>
					</TableContainer>
					</div>
				  </div>
				</div>
			  </div>
			</Box>
		</Box>
        </>
    );
}
