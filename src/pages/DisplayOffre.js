import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, Button, Dialog, DialogContent, IconButton, Box } from '@mui/material';
import Sidebar from '../components/Agence/sidebar';
import Navbar from '../components/Agence/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../components/api';
function AgenceDisplayOffre() {
  const [agenceUsers, setAgenceUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const adminLocality = localStorage.getItem('localite');

  useEffect(() => {
    if (!token) {
      navigate('/agence/Recruteur');
      return;
    }

    // Simulating fetching data from the server
    const fetchData = async () => {
      try {
        const response = await api.get('/recruteur/list');
        setAgenceUsers(response.data);
      } catch (error) {
        console.error('Error fetching recruiting applications data:', error);
      }
    };

    fetchData();
  }, [navigate, token]);

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
                  <Grid item xs={12} sm={6} md={4} key={user.idE}>
                    <Card className="card1">
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.localisation}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.contact}
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
                <Grid item xs={12} sm={6} md={4}>
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
              <Typography variant="h6">{selectedUser?.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.localisation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.contact}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.sujet}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.Detail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(selectedUser?.createdAt).toLocaleDateString()}
              </Typography>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default AgenceDisplayOffre;
