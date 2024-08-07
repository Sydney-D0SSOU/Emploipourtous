import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Sidebar from '../components/Admin/sidebar';
import Navbar from '../components/Admin/Navbar';
import { useNavigate } from 'react-router-dom';
function Aide() {
	const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Aide & Support</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ width: '50%' }}>
                <CardContent onClick={() => { navigate("/Aide/Content") }}>
                  <Typography variant="h5" component="div">
                    Welcome to the Aide & Support section.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Here, you can find helpful resources and get support for any questions or issues.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    If you need assistance, please contact our support team at support@example.com.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Aide;
