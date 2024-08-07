import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from "@mui/material";
import Sidebar from "../components/Agence/sidebar";
import Navbar from "../components/Agence/Navbar";
import { useNavigate } from 'react-router-dom';

function DisplayZone() {
  const [agenceUsers, setAgenceUsers] = useState([]);
   const [recruite, setRecruite] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
   const adminLocality = localStorage.getItem('localite');
  /*useEffect(() => {
	   if (!token) {
      navigate('/Login');
      return;
    }
       axios.get(`http://localhost:5000/api/agence/usersdemande/${adminLocality}`, {})
      .then(response => {
         setAgenceUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
       axios.get(`http://localhost:5000/api/agence/usersoffre/${adminLocality}`)
      .then(response => {
        setRecruite(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiting applications data:', error);
      });
      
  }, [navigate, token]);*/

  return (
           <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="" sx={{ flexGrow: 1, p: 3 }}>
						<div>
						  <Typography variant="h5" component="div" gutterBottom>
							Agence Users
						  </Typography>
						  <Grid container spacing={2}>
							{agenceUsers.map((user) => (
							  <Grid item xs={12} sm={6} md={4} key={user.id}>
								<Card>
								  <CardContent>
									<Typography variant="h6" component="div">
									  {user.nom} {user.prenoms}
									</Typography>
									<Typography variant="body2" color="text.secondary">
									  {user.email}
									</Typography>
									<Typography variant="body2" color="text.secondary">
									  {user.zone}
									</Typography>
									{/* Add other user information */}
								  </CardContent>
								</Card>
							  </Grid>
							))}
						  </Grid>
						  <Box height={40} />
						   <Grid container spacing={2}>
							{recruite.map((user) => (
							  <Grid item xs={12} sm={6} md={4} key={user.id}>
								<Card>
								  <CardContent>
									<Typography variant="h6" component="div">
									  {user.entreprise}
									</Typography>
									<Typography variant="body2" color="text.secondary">
									  {user.email}
									</Typography>
									<Typography variant="body2" color="text.secondary">
									  {user.zone}
									</Typography>
									{/* Add other user information */}
								  </CardContent>
								</Card>
							  </Grid>
							))}
						  </Grid>
						</div>
						</Box>
					</Box>
			</>
  );
}

export default DisplayZone;
