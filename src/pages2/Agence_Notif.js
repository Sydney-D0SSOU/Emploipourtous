import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography} from '@mui/material';
import Sidebar from "../components/Agence/sidebar";
import Navbar from "../components/Agence/Navbar";
import Box from '@mui/material/Box';
import AgenceNotification2 from './Agence_Notif2';

function AgenceNotification() {
  const [notifMessage, setNotifMessage] = useState([]);
  const userId = localStorage.getItem('id');
  

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notifications/${userId}`)
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
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			<div>
			  <h2>Notifications</h2>
			  </div>
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
		<AgenceNotification2 />
		<Box height={30} />
		 <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000", padding: "7px 0px" }}>
									  Employer Demande
									</Typography>
		<div>
		  {notifMessage.length > 0 ? (
			notifMessage.map((request) => (
			  <Card className="card1" key={request.notif_message}>
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
        </Box>
      </Box>
       </>
  );
}

export default AgenceNotification;
