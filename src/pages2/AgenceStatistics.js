import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import Sidebar from "../components/Agence/sidebar";
import Navbar from "../components/Agence/Navbar";
import { useNavigate } from 'react-router-dom';
import {Explodeslice} from './Explodingslice';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CountUp from 'react-countup';
import BackgroundLetterAvatars from './avatar';

function AgenceStatistics() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  const [graphData, setGraphData] = useState(null);

  /*useEffect(() => {
	   if (!token) {
      navigate('/agence/Statistics');
      return;
    }
    const adminLocality = localStorage.getItem('localite');
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin-graph-data/${adminLocality}`
        ,{});
        setGraphData(response.data);
      } catch (error) {
        console.error('Error fetching admin graph', error);
      }
    }
    fetchData();
  }, [navigate, token]);*/

 

  return (
           <>
            <div>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box height={20} />
                        <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Stack direction="row" spacing={2} >
                            <Box sx={{ width: '50%' }}>
                               <Card sx={{ height: 19 + 'vh' }} className="gradient1">
								  <CardContent>
									<Typography gutterBottom variant="p" component="div" sx={{ color: "#ccd1d1", padding: "7px 0px" }}>
									  Recruteur
									</Typography>
									<Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
									  Total Recruteur
									</Typography>
									<Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
									  <CountUp delay={0.5} end={graphData.data.recruiters} duration={0.5} />
									</Typography>
								  </CardContent>
								</Card>
								<Card sx={{ height: 19 + 'vh', marginTop: "16px" }} className="gradient1">
								  <CardContent>
									<Typography gutterBottom variant="p" component="div" sx={{ color: "#ccd1d1", padding: "7px 0px" }}>
									  Users
									</Typography>
									<Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
									  Total Users
									</Typography>
									<Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
									  {<CountUp delay={0.5} end={graphData.data.users} duration={0.5} />}
									</Typography>
								  </CardContent>
								</Card>
							  </Box>
							  <Box sx={{ width: '50%', height: "50%" }}>
								<Card sx={{ height: 19 + 'vh' }} className="gradientlight1">
								  <CardContent>
									<Typography gutterBottom variant="p" component="div" sx={{ color: "#ccd1d1", padding: "7px 0px" }}>
									 Travailleur
									</Typography>
									<Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
									  Total Travailleur
									</Typography>
									<Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
									  <CountUp delay={0.5} end={graphData.data.workers} duration={0.5} />
									</Typography>
								  </CardContent>
								</Card>
								{/*<Card sx={{ height: 19 + 'vh', marginTop: "16px" }} className="gradientlight1">
								  <CardContent>
									<Typography gutterBottom variant="p" component="div" sx={{ color: "#ccd1d1", padding: "7px 0px" }}>
									  Recruteur
									</Typography>
									<Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
									  Total Recruteur
									</Typography>
									<Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
									  {<CountUp delay={0.5} end={graphData.data.recruiters} duration={0.5} />}
									</Typography>
								  </CardContent>
								</Card>*/}
                                     </Box>
                            </Stack>
                            </Grid>
                            <Grid item xs={7}>
                              <Card sx={{ height: 40 + 'vh' }}>
                              <CardContent>
                              <Explodeslice/>
                                   </CardContent>
                                   </Card>
                              </Grid>
                              <Box height={20} />
                            <Grid item xs={20}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: 800 }}>
									  Lists
									</Typography>
                                        {<BackgroundLetterAvatars/>}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
      );
}

export default AgenceStatistics;
