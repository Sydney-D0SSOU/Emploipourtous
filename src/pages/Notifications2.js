import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Card, CardContent, Dialog, DialogContent, Button, Typography, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function NotificationComponent2() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showAcceptDeclineDialog, setShowAcceptDeclineDialog] = useState(false);
  const [delete2Requests, setDelete2Requests] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    axios.get('http://localhost:5000/api/deleterequestsoffre')
      .then((response) => {
        setDelete2Requests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching delete requests:', error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (request) => {
    setSelectedRequest(request);
    setShowAcceptDeclineDialog(true);
    
    axios.post('http://localhost:5000/api/changeStatus2', { id_delete: request.id_delete, status: true})
		  .then((response) => {
			  console.log('Satus changed:', response.data);
		  })
		  .catch((error) => {
		  console.error('Error changing status:', error);
		});  
  };
  
  const handleDeleteClick = (event, id) => {
    event.stopPropagation(); 
    axios.delete(`http://localhost:5000/api/delete-notification/${id}`)
      .then((response) => {
        console.log('Notification deleted:', response.data);
        setDelete2Requests(delete2Requests.filter(request => request.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting notification:', error);
      });
  };

  const handleAcceptDeclineClose = () => {
    setSelectedRequest(null);
    setShowAcceptDeclineDialog(false);
  };

const handleAccept = () => {
     axios.post('http://localhost:5000/api/accept-request2', {
      id_delete:  selectedRequest.id_delete,
      message:` Your request  to delete User "${selectedRequest.delete_name}", has been accepted .`
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
    axios.post('http://localhost:5000/api/decline-request2', {
      id_delete:  selectedRequest.id_delete,
      message:` Your request  to delete User "${selectedRequest.delete_name}", has been declined .`
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
  
  const handleMouseEnter = () => {
		setHovered(true);
	  };

	  const handleMouseLeave = () => {
		setHovered(false);
	  };


  return (
    <>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000", padding: "7px 0px" }}>
									  Employee Demande
									</Typography>
			 {loading ? (
          <CircularProgress />
				) : (
           <div>
		  {delete2Requests.length > 0 ? (
			delete2Requests.map((request, index) => (
			  <Card className="card1" sx={{ marginBottom: "20px", backgroundColor: request.message_status ? '#ECEFF1' : '#fff',
                      color: request.message_status ? 'grey' : '#000', width: '80vw'}} key={index} onClick={() => handleCardClick(request)}>
				<CardContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				  {`${request.sender_name}        ${request.message}`}
				  {hovered && (
					  <Tooltip title="Delete">
					<IconButton aria-label="delete" sx={{ position: "absolute", top: "5px", right: "20px" }} onClick={(event)=> handleDeleteClick(event, request.id)}>
					  <DeleteIcon />
					</IconButton>
					</Tooltip>
				  )}
				</CardContent>
			  </Card>
			))
		  ) : (
		   <Card>
				<CardContent>
				  <p>No notification for Employee</p>
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
        <Tooltip title="Close">
         <IconButton edge="end" color="inherit" style={{ position: "absolute", top: "10px", right: "10px" }} onClick= {handleAcceptDeclineClose}>
					  <CloseIcon />
					</IconButton>
					</Tooltip>
          <DialogContent>
            <Typography variant="body1">{selectedRequest.message_body}</Typography>
            <Button onClick={handleAccept}>Accept</Button>
            <Button onClick={handleDecline}>Decline</Button>
          </DialogContent>
        </Dialog>
      )}
       
    </>
  );
}

export default NotificationComponent2;
