import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { Box } from '@mui/material';
import Sidebar from '../components/Agence/sidebar';
import Navbar from '../components/Agence/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function AgenceDisplayOffre() {
  const [agenceUsers, setAgenceUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const adminLocality = localStorage.getItem('localite');

  /*useEffect(() => {
    if (!token) {
      navigate('/agence/Recruteur');
      return;
    }

       axios.get(`http://localhost:5000/api/agence/usersoffre/${adminLocality}`)
      .then(response => {
         setAgenceUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiting applications data:', error);
      });
	  }, [navigate, token]);*/

	  const handleDetailsOpen = (user) => {
		setSelectedUser(user);
		setOpenDetailsDialog(true);
	  };

	  const handleDetailsClose = () => {
		setSelectedUser(null);
		setOpenDetailsDialog(false);
	  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            <Typography variant="h5" component="div" gutterBottom>
              Offres
            </Typography>
            <Grid container spacing={2}>
            {agenceUsers.length > 0 ? (
              agenceUsers.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <Card className="card1">
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
                      <Typography variant="body2" color="text.secondary">
                        {user.contact_telephonique}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleDetailsOpen(user)}
                      >
                        More Details
                      </Button>
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
          <Dialog open={openDetailsDialog} onClose={handleDetailsClose}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDetailsClose}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <Typography variant="h6">{selectedUser?.entreprise}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.zone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.contact_telephonique}
              </Typography>
               <Typography variant="body2" color="text.secondary">
                {selectedUser?.sujet}
              </Typography>
               <Typography variant="body2" color="text.secondary">
                {selectedUser?.detail_requete}
              </Typography>
              {/* Add other user information */}
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default AgenceDisplayOffre;
