import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../components/servicePublic Components/sidebarSP";
import Navbar from "../components/servicePublic Components/NavbarSP";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../Dash.css";
import '../components/Admin/Admincomponent.css';

export default function ServicePublic() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [backgroundColor, setBackgroundColor] = useState('#000');

  /*useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    } 

    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []); */

  const getRandomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  
  return (
    
      <div className="main-container">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, background: `linear-gradient(to right, ${backgroundColor} 0%, ${getRandomColor()} 100%)`, height: "200px"}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
              <div id="stars-container"></div>
                <Card>
                  <CardContent>
                    <Typography className="card-title" variant="h5" component="div">
                      Welcome to Your Dashboard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Explore the features and manage your account.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              </Grid>
               <Box height={100} />
               <Grid container spacing={8}>
              {/* Add more grid items/cards for additional sections */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card1">
                  <CardContent>
                    <Typography className="card-title" variant="h5" component="div">
                      Additional Section
                    </Typography>
                    <Typography className="card-description" variant="body2" color="text.secondary">
                      Explore more content here.
                    </Typography>
                    <Button className="card-button" variant="contained" onClick={() => navigate('/Service_travailler')}>
                      Page 1
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
                <Card className="card1">
                  <CardContent>
                    <Typography className="card-title" variant="h5" component="div">
                      Another Section
                    </Typography>
                    <Typography className="card-description" variant="body2" color="text.secondary">
                      Discover more information.
                    </Typography>
                    <Button className="card-button" variant="contained" onClick={() => navigate('/Service_recruteur')}>
                      Page 2
                    </Button>
                  </CardContent>
                </Card>
               </Grid>
          </Box>
        </Box>
      </div>
    
  );
}
