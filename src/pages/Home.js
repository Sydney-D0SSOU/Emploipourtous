import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import AccordionDash from "../components/Admin/Accordion";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import Typography from '@mui/material/Typography';
import '../components/Admin/Admincomponent.css';
import axios from 'axios';


export default function Home() {
	
	const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [agenceUsers, setAgenceUsers] = useState([]);
    const [activeCard, setActiveCard] = useState('Agence');

  const handleCardClick = (cardTitle) => {
    setActiveCard(cardTitle);
  };
  
  const handleCardClick2 = (cardTitle) => {
    setActiveCard(cardTitle);
    navigate('/Validation');
  };

  const handleAddAdmin = () => {
    navigate('/Add/Admin');
  };

  const handleDeleteUser = () => {
    navigate('/delete');
  };
  

  useEffect(() => {
    if (!token) {
      navigate('/AdminAccueil');
      return;
    }

    axios.get('http://localhost:5000/api/agence-users')
      .then((response) => {
        setAgenceUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching agence users:', error);
      });
  }, [navigate, token]);

    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 10}}>
                     <Box height={20} />
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Card sx={{ height: '30vh', width: '77%', borderRadius: '20px', background: '#022960' }}>
								  <CardContent>
									<Typography gutterBottom variant="h4" component="div" sx={{ color: '#fff' }}>
									  Agrandir le réseau de
									</Typography>
									<Typography gutterBottom variant="h4" component="div" sx={{ color: '#fff' }}>
									  emploi pour tous
									</Typography>
									<Box height={50} />
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
									  <button className="card-button" style={{ background: '#fff', color: '#022960', borderRadius: '5px', padding: '8px 16px', border: 'none' }} onClick= {handleDeleteUser}>
										supprimer
									  </button>

									  <button className="card-button" style={{ background: 'transparent', color: '#fff', borderRadius: '5px', padding: '8px 16px', border: '2px solid #ccc' }} onClick={handleAddAdmin}>
										Ajouter
									  </button>
									</div>
								  </CardContent>
								</Card>
                                 <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={3} direction="row">
						    <Card
									  sx={{
										minWidth: 20 + '%',
										height: 50,
										borderRadius: '20px',
										cursor: 'pointer',
										backgroundColor: activeCard === 'Agence' ? 'orange' : 'white',
									  }}
									  className="gradient"
									  onClick={() => handleCardClick('Agence')}
									>
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  Agence
										</Typography>
									  </CardContent>
									</Card>
                                     <Card
									  sx={{
										minWidth: 18 + '%',
										height: 50,
										borderRadius: '20px',
										cursor: 'pointer',
										backgroundColor: activeCard === 'Point' ? 'orange' : 'white',
									  }}
									  className="gradient"
									  onClick={() => handleCardClick('Point')}
									>
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  Point
										</Typography>
									  </CardContent>
									</Card>
                                     <Card 
									  sx={{ 
										minWidth: 22 + '%',
										height: 50,
										borderRadius: '20px',
										cursor: 'pointer',
										backgroundColor: activeCard === 'Entreprise' ? 'orange' : 'white',
									  }}
									  className="gradient"
									  onClick={() => handleCardClick('Entreprise')}
									>
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  Entreprise
										</Typography>
									  </CardContent>
									</Card>
                                    <Card
									  sx={{
										minWidth: 20 + '%',
										height: 50,
										borderRadius: '20px',
										cursor: 'pointer',
										backgroundColor: activeCard === 'Personnes' ? 'orange' : 'white',
									  }}
									  className="gradient"
									  onClick={() => handleCardClick('Personnes')}
									>
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  Personnes
										</Typography>
									  </CardContent>
									</Card>
                                    <Card
									  sx={{
										minWidth: 20 + '%',
										height: 50,
										borderRadius: '20px',
										cursor: 'pointer',
										backgroundColor: activeCard === 'Validation' ? 'orange' : 'white',
									  }}
									  className="gradient"
									  onClick={() => handleCardClick2('Validation')}
									>
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  Validation
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
										  {agenceUsers.length > 0 ? agenceUsers[0].username : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {agenceUsers.length > 0 ? agenceUsers[0].localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>

									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography variant="h6" sx={{ color: '#000' }}>
										  {agenceUsers.length > 1 ? agenceUsers[1].username : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {agenceUsers.length > 1 ? agenceUsers[1].localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>
									</Stack>
									<Box height={40} />
									<Stack spacing={7} direction="row">
									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography gutterBottom variant="h6" sx={{ color: '#000' }}>
										  {agenceUsers.length > 2 ? agenceUsers[2].username : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {agenceUsers.length > 2 ? agenceUsers[2].localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>

									<Card sx={{ minWidth: '35%', height: '20vh', borderRadius: '10px' }} className="gradientlight">
									  <CardContent>
										<Typography gutterBottom variant="h6" component="div" sx={{ color: '#000' }}>
										  {agenceUsers.length > 3 ? agenceUsers[3].username : 'No user'}
										</Typography>
										<Typography gutterBottom variant="h8" component="div" sx={{ color: '#555' }}>
										  {agenceUsers.length > 3 ? agenceUsers[3].localite : 'No localite'}
										</Typography>
									  </CardContent>
									</Card>
                                    </Stack>
                                    
                            </Grid>
                            <Grid item xs={3}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                                                Requêtes
                                            </Typography>
                                <Card sx={{ height: 100 + "%", borderRadius: '20px' }}>
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

