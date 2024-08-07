import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Sidebar from '../components/Admin/sidebar';
import Navbar from '../components/Admin/Navbar';
import { Card, CardContent, Dialog, DialogContent, Button, Typography, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationComponent2 from './Notifications2';

function NotificationComponent() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showAcceptDeclineDialog, setShowAcceptDeclineDialog] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteRequests, setDeleteRequests] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
   /* if (!token) {
      navigate('/Login');
      return;
    }*/

    axios.get('http://localhost:5000/api/deleterequests')
      .then((response) => {
        setDeleteRequests(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching delete requests:', error);
        setLoading(false);
      });
  }, [navigate, token]);

  const handleCardClick = (request) => {
    setSelectedRequest(request);
    setShowAcceptDeclineDialog(true);
    axios.post('http://localhost:5000/api/changeStatus', { id_delete: request.id_delete, status: true})
		  .then((response) => {
			  console.log('Satus changed:', response.data);
		  })
		  .catch((error) => {
		  console.error('Error changing status:', error);
		});  
  };

  /*const handleDeleteClick = (request) => {
    setSelectedRequest(request);
    setShowDeleteConfirmation(true);
  };*/

  const handleDeleteConfirmationClose = () => {
    setSelectedRequest(null);
    setShowDeleteConfirmation(false);
  };

  const handleAcceptDeclineClose = () => {
    setSelectedRequest(null);
    setShowAcceptDeclineDialog(false);
  };

 const handleDeleteClick = (event, id) => {
    event.stopPropagation(); 
    axios.delete(`http://localhost:5000/api/delete-notification2/${id}`)
      .then((response) => {
        console.log('Notification deleted:', response.data);
        setDeleteRequests(deleteRequests.filter(request => request.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting notification:', error);
      });
  };
  
  const handleAccept = () => {
    axios.post('http://localhost:5000/api/accept-request', {
      id_delete: selectedRequest.id_delete,
      message: `Your request to delete Company "${selectedRequest.delete_name}", has been accepted.`,
    })
      .then((response) => {
        console.log('Request accepted:', response.data);
      })
      .catch((error) => {
        console.error('Error accepting request:', error);
      });

    setSelectedRequest(null);
    setShowAcceptDeclineDialog(false);
  };

  const handleDecline = () => {
    axios.post('http://localhost:5000/api/decline-request', {
      id_delete: selectedRequest.id_delete,
      message: `Your request to delete Company "${selectedRequest.delete_name}", has been declined.`,
    })
      .then((response) => {
        console.log('Request declined:', response.data);
      })
      .catch((error) => {
        console.error('Error declining request:', error);
      });

    setSelectedRequest(null);
    setShowAcceptDeclineDialog(false);
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Notifications</h2>
           <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
           <NotificationComponent2 />
          <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000", padding: "7px 0px" }}>
									   Employer Demande
									</Typography>
			{loading ? (
          <CircularProgress />
				) : (
           <div>
		  {deleteRequests.length > 0 ? (
			deleteRequests.map((request, index) => (
			  <Card className="card1" sx={{ marginBottom: "20px", backgroundColor: request.message_status ? '#ECEFF1' : '#fff',
                      color: request.message_status ? 'grey' : '#000', width: '80vw'}} key={index} onClick={() => handleCardClick(request)}>
				<CardContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				  {`${request.sender_name}        ${request.message}`}
				  {hovered && (
					<IconButton aria-label="delete" sx={{ position: "absolute", top: "5px", right: "20px" }} onClick={(event)=> handleDeleteClick(event, request.id)}>
					  <DeleteIcon />
					</IconButton>
				  )}
				</CardContent>
			  </Card>
			))
		  ) : (
		   <Card>
				<CardContent>
				  <p>No notification for Company</p>
				</CardContent>
			  </Card>
		  )}
       </div>
       )}
          </Box>
          {selectedRequest && (
        <Dialog 
        
          open={showAcceptDeclineDialog} 
          onClose={handleAcceptDeclineClose}
          maxWidth="md" 
          fullWidth 
          sx={{
            height: '80vh', 
            overflowY: 'auto', 
          }}

        >
                  <IconButton edge="end" color="inherit" style={{ position: "absolute", top: "10px", right: "10px" }} onClick= {handleAcceptDeclineClose}>
					  <CloseIcon />
					</IconButton>
          <DialogContent>
            <Typography variant="body1">{selectedRequest.message_body}</Typography>
            <Button onClick={handleAccept}>Accept</Button>
            <Button onClick={handleDecline}>Decline</Button>
          </DialogContent>
        </Dialog>
      )}
        </Box>
      </Box>
    </>
  );
}

export default NotificationComponent;




