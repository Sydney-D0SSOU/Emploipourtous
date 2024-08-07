import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarAgence from "../components/Agence/sidebar";
import NavbarAgence from "../components/Agence/Navbar";
import AccordionDash from "../components/Agence/Accordion";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import Typography from '@mui/material/Typography';
import '../components/Agence/Admincomponent.css';
import axios from 'axios';

export default function HomeAgence() {
	
	const navigate = useNavigate();
	const [recruite, setRecruite] = useState([]);
    const token = localStorage.getItem('token');
    const adminLocality = localStorage.getItem('localite');
    const handleDeleteUser = () => {
    navigate('/agence/delete');
  };
  
  /*useEffect(() => {
	  
	  if (!token) {
      navigate('/Login');
      return;
    }
    
      axios.get(`http://localhost:5000/api/agence/usersoffre/${adminLocality}`)
      .then(response => {
       setRecruite(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiting applications data:', error);
      });
      
     }, [navigate, token]);*/

    return (
        <>
            <div className="bgcolor1">
                <NavbarAgence />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SidebarAgence />
                    <Box component="main" sx={{ flexGrow: 1, p: 10}}>
                     <Box height={20} />
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Card sx={{ height: '30vh', width: '75%', borderRadius: '20px', background: '#022960' }}>
								  <CardContent>
									<Typography gutterBottom variant="h4" component="div" sx={{ color: '#fff' }}>
									  Agrandir le réseau de
									</Typography>
									<Typography gutterBottom variant="h4" component="div" sx={{ color: '#fff' }}>
									  emploi pour tous
									</Typography>
									<Box height={50} />
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
									  <button style={{ background: '#fff', color: '#022960', borderRadius: '5px', padding: '8px 16px', border: 'none' }} onClick= {handleDeleteUser}>
										supprimer
									  </button>
									</div>
								  </CardContent>
								</Card>

                                 <Box height={50} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={3} direction="row">
                                    <Card sx={{ minWidth: 18 + "%", height: 50, borderRadius: '20px' }} className="gradient">
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000" }}>
                                                Points
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                     <Card sx={{ minWidth: 22 + "%", height: 50, borderRadius: '20px' }} className="gradient">
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000" }}>
                                                Demandes
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                     <Card sx={{ minWidth: 22 + "%", height: 50, borderRadius: '20px' }} className="gradient">
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000" }}>
                                                Entreprises
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 22 + "%", height: 50, borderRadius: '20px' }} className="gradient">
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000" }}>
                                                Personnes
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 15 + "%", height: 50, borderRadius: '20px' }} className="gradientlight">
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000" }}>
                                                Note
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                             </Grid>
                             <Box height={40} />
                             <Stack spacing={7} direction="row">
                                    <Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography variant="h6" sx={{ color: '#000' }}>
										  {recruite.length > 0 ? recruite[0].entreprise : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {recruite.length > 0 ? recruite[0].Localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>

									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography variant="h6" sx={{ color: '#000' }}>
										  {recruite.length > 1 ? recruite[1].entreprise : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {recruite.length > 1 ? recruite[1].Localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>
									</Stack>
									<Box height={40} />
                                  <Stack spacing={7} direction="row">
									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography gutterBottom variant="h6" sx={{ color: '#000' }}>
										  {recruite.length > 2 ? recruite[2].entreprise : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {recruite.length > 2 ? recruite[2].Localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>
                                 
									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  {recruite.length > 3 ? recruite[3].entreprise : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {recruite.length > 3 ? recruite[3].Localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>
									</Stack>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                                                Requêtes
                                            </Typography>
                                <Card sx={{ height: 110 + "vh", borderRadius: '20px' }}>
                                    <CardContent>
                                        {<AccordionDash />}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}

