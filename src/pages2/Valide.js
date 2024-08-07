import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box, Button, Dialog, DialogContent, IconButton } from "@mui/material";
import Sidebar from "../components/Agence/sidebar";
import Navbar from "../components/Agence/Navbar";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AgenceValidation2 from './valide2';

function AgenceValidation() {
  const [agenceUsers, setAgenceUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [openValideDialog, setOpenValideDialog] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
   const adminLocality = localStorage.getItem('localite');
 /* useEffect(() => {
	   if (!token) {
      navigate('/Login');
      return;
    }
       axios.get(`http://localhost:5000/api/agence/usersdemandevali/${adminLocality}`, {})
      .then(response => {
         setAgenceUsers(response.data);
         console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }, [navigate, token]);*/
  
   const handleValideOpen = (user) => {
    setSelectedUser(user);
    setOpenValideDialog(true);
  };
  
  const handleValideClose = () => {
    setSelectedUser(null);
    setOpenValideDialog(false);
  };
  
  const handleValidateUser = () => {
     axios
      .post(`http://localhost:5000/api/validatedemande-users/${selectedUser.id}`)
      .then(() => {
        handleValideClose();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
           <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="" sx={{ flexGrow: 1, p: 3 }}>
						<div>
						  <Typography variant="h5" component="div" gutterBottom>
						    Users
						  </Typography>
						  <Grid container spacing={2}>
						  {agenceUsers.length > 0 ? (
								agenceUsers.map((user) => (
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
									{user.auth === null ? (
									<Button
									variant="outlined"
									color="primary"
									onClick={() => handleValideOpen(user)}
								  >
									Valide
								  </Button>
								  ) : (
								  < CheckIcon/>
								  )}
								  </CardContent>
								</Card>
							  </Grid>
								))
							  ) : (
							  <Grid item xs={12} sm={6} md={4} >
							   <Card>
									<CardContent>
									  <p>No User</p>
									</CardContent>
								  </Card>
								  </Grid>
							  )}
							
						  </Grid>
						  <	AgenceValidation2 />
						</div>
						<Dialog open={openValideDialog} onClose={handleValideClose}>
							<IconButton
							  edge="end"
							  color="inherit"
							  onClick={handleValideClose}
							  style={{ position: 'absolute', top: '10px', right: '10px' }}
							>
							  <CloseIcon />
							</IconButton>
							<DialogContent>
							  <Typography variant="h6">Validate User</Typography>
							  <Typography variant="body1">
								Are you sure you want to Validate the user{' '}
								{selectedUser?.nom}?
							  </Typography>
							  <Button
								variant="outlined"
								color="primary"
								onClick={handleValidateUser}
							  >
								Validate
							  </Button>
							</DialogContent>
						  </Dialog>
						</Box>
					</Box>
			</>
  );
}

export default AgenceValidation;
