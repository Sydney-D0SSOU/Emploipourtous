import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography, Button, Dialog, DialogContent, IconButton,} from '@mui/material';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

function DeleteDemande() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [usersInSameLocality, setUsersInSameLocality] = useState([]); 
  const [messageBody, setMessageBody]= useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

 /* useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }

      const adminLocality = localStorage.getItem('localite');
		axios.get(`http://localhost:5000/api/usersdemande-by-locality/${adminLocality}`)
		  .then((response) => {
			setUsersInSameLocality(response.data);
		  })
		  .catch((error) => {
			console.error('Error fetching users by locality:', error);
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

	  const handleDeleteOpen = (user) => {
		setSelectedUser(user);
		setOpenDeleteDialog(true);
	  };

	  const handleDeleteClose = () => {
		setSelectedUser(null);
		setOpenDeleteDialog(false);
		setError('');
		setMessageBody('');
	  };

	   const handleDeleteUser = () => {
		   if (messageBody.trim() === '') {
			   setError('please enter a message' );
			   return
		   }
	  const confirmationMessage = ` wants to delete "${selectedUser.nom}", needs confirmation.`;
	  axios
		.post('http://localhost:5000/api/demandedeleterequest', {
		  loggedInUserId: localStorage.getItem('id'),
		  selectedUserId: selectedUser.id,
		  message: confirmationMessage,
		  senderName: localStorage.getItem('username'),
		  deleteName: selectedUser.nom,
		  messageBody: messageBody,
		})
		.then(() => {
		  setDeleteConfirmation(true);
		  setOpenDeleteDialog(false);
		  setMessageBody('');
		})
		.catch((error) => {
		  console.error('Error sending confirmation:', error);
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
             {usersInSameLocality.length > 0 ? (
              usersInSameLocality.map((user) => (
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
                        {user.Localite}
                      </Typography>
                     
                      
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
			  <DialogContent style={{ width: '40vw', height: '500px'}}>
				<Typography variant="h6">Delete User</Typography>
				<Typography variant="body1">
				  Set in reasons to delete the user{' '}
				  {selectedUser?.nom}?
				</Typography>
				<textarea
				  placeholder="Enter your message here"
				  value={messageBody}
				  onChange={(e) => setMessageBody(e.target.value)}
				  style={{ width: '30vw', height: '350px', marginTop: '10px' }}
				></textarea>
				<Typography variant="body2" color="error">{error}</Typography>
				<Button
				  variant="outlined"
				  color="primary"
				  onClick={handleDeleteUser}
				>
				  <SendIcon/>
				</Button>
			  </DialogContent>
			</Dialog>
          {deleteConfirmation && (
            <Dialog open={deleteConfirmation} onClose={() => setDeleteConfirmation(false)}>
              <DialogContent>
                <Typography variant="body1">
                  Deletion request has been sent.
                </Typography>
              </DialogContent>
            </Dialog>
            )}
    </>
  );
}

export default DeleteDemande;
