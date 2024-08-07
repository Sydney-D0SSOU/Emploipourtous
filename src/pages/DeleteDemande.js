import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { Box } from '@mui/material';
import Sidebar from '../components/Admin/sidebar';
import Navbar from '../components/Admin/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function DeleteDemande() {
  const [agenceUsers, setAgenceUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }

    axios
      .get('http://localhost:5000/api/demande-users')
      .then((response) => {
        setAgenceUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Agence users:', error);
      });
  }, [navigate, token]);

  const handleDetailsOpen = (user) => {
    setSelectedUser(user);
    setOpenDetailsDialog(true);
  };

  const handleDetailsClose = () => {
    setSelectedUser(null);
    setOpenDetailsDialog(false);
  };

  const handleDeleteOpen = (user) => {
    setSelectedUser(user);
    setOpenDeleteDialog(true);
  };

  const handleDeleteClose = () => {
    setSelectedUser(null);
    setOpenDeleteDialog(false);
  };

  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:5000/api/deletedemande-users/${selectedUser.id}`)
      .then(() => {
        setAgenceUsers((users) => users.filter((user) => user.id !== selectedUser.id));

        handleDeleteClose();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <>
      <Box height={70} />
          <div>
            <Typography variant="h5" component="div" gutterBottom>
              Demande
            </Typography>
            <Grid container spacing={2}>
              {agenceUsers.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <Card className="card1">
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
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleDetailsOpen(user)}
                      >
                        More Details
                      </Button>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={() => handleDeleteOpen(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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
              <Typography variant="h6">{selectedUser?.nom} {selectedUser?.prenoms}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.numero_telephone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.zone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.contact_telephonique}
              </Typography>
               <Typography variant="body2" color="text.secondary">
                {selectedUser?.type_emploi}
              </Typography>
               <Typography variant="body2" color="text.secondary">
                {selectedUser?.parcours}
              </Typography>
              {/* Add other user information */}
            </DialogContent>
          </Dialog>
          <Dialog open={openDeleteDialog} onClose={handleDeleteClose}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDeleteClose}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <Typography variant="h6">Delete User</Typography>
              <Typography variant="body1">
                Are you sure you want to delete the user{' '}
                {selectedUser?.nom}?
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleDeleteUser}
              >
                Delete
              </Button>
            </DialogContent>
          </Dialog>
    </>
  );
}

export default DeleteDemande;
