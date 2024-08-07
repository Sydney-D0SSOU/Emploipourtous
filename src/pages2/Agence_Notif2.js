import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography} from '@mui/material';
import Box from '@mui/material/Box';

function AgenceNotification2() {
  const [notifMessage, setNotifMessage] = useState([]);
  const userId = localStorage.getItem('id');
  

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notifications2/${userId}`)
      .then((response) => {
        setNotifMessage(response.data);
        console.log(notifMessage);
      })
      .catch((error) => {
        console.error('Error fetching notification:', error);
      });
  }, [userId]);

  return (
    <>
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
		<Typography gutterBottom variant="h6" component="div" sx={{ color: "#000", padding: "7px 0px" }}>
									  Employee Demande
									</Typography>
		<div>
		  {notifMessage.length > 0 ? (
			notifMessage.map((request) => (
			  <Card className="card1"  sx={{ marginBottom: "30px" }} key={request.notif_message}>
				<CardContent>
				  {request.notif_message}
				</CardContent>
			  </Card>
			))
		  ) : (
		   <Card>
				<CardContent>
				  <p>No notification</p>
				</CardContent>
			  </Card>
		  )}
		</div>
     </Box>
       </>
  );
}

export default AgenceNotification2;
