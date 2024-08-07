import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box, Button, Dialog, DialogContent, IconButton } from "@mui/material";
import Sidebar from "../components/Agence/sidebar";
import Navbar from "../components/Agence/Navbar";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function AgenceValidation2() {
	
	const [recruite, setRecruite] = useState([]);
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
		
		axios.get(`http://localhost:5000/api/agence/usersoffrevali/${adminLocality}`)
      .then(response => {
        setRecruite(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiting applications data:', error);
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
      .post(`http://localhost:5000/api/validatedemande2-users/${selectedUser.id}`)
      .then(() => {
        handleValideClose();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
	
	return (
	      
	       <>
			  <Box height={50} />
				  <div>
					<Typography variant="h5" component="div" gutterBottom>
					  Entreprise
					</Typography>
					<Box height={20} />
						   <Grid container spacing={2}>
						   {recruite.length > 0 ? (
							recruite.map((user) => (
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
								{selectedUser?.entreprise}?
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
         </>
	 );
}
export default AgenceValidation2;
