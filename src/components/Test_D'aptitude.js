/*import * as React from 'react';
import Box from '@mui/material/Box';
import DefaultNav from './DefaultNav';
import Typography from '@mui/material/Typography';
import ContactezNous from './contacteznous';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function TestDaptitude() {
  return (
  <div>
   <DefaultNav />
    <Box >
     <Card sx={{ maxWidth: 800, maxHeight: 50, backgroundColor:'#ECEFF1'}}>
       <CardContent>
       <Typography sx={{ color: "#000", fontWeight: 800, }} gutterBottom variant="h8">
                cet ensemble de seance ne peut plus etre reservé.
              </Typography>
       </CardContent>
          </Card>
          <Typography sx={{ color: "#000", fontWeight: 800, }} gutterBottom variant="h4">
                Test D'aptitude TA
              </Typography>
              <Typography sx={{ color: "primary", fontWeight: 0 }} gutterBottom variant="h4">
                Ce service permet de determine votre niveau de compétence selon le domain que vous avez choisi.
              </Typography>
    </Box>
     <ContactezNous />
    </div>
  );
}*/

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import './Items.css';
import DefaultNav from './DefaultNav';
import ContactezNous from './contacteznous';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function TestDaptitude() {
	
	const cellStyle = {
	  borderRight: 'none',
	  borderLeft: 'none',
	};
  return (
   <div>
   <DefaultNav />
     <Box className="article-container" sx={{ display: 'flex', JustifyContent: 'center', alignItem: 'center' }}>
     <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: 800 }}>
    <Card sx={{ maxWidth: 800, maxHeight: 50, backgroundColor:'#ECEFF1'}}>
       <CardContent>
       <Typography sx={{ color: "#000", fontWeight: 800, backgroundColor:'#ECEFF1' }} gutterBottom variant="h8">
                cet ensemble de seance ne peut plus etre reservé.
              </Typography>
       </CardContent>
          </Card>
           <Box height={30} />
      <Typography variant="h4">Test d'aptitude TA</Typography>
      <Box height={30} />
      <Typography paragraph sx={{ color:'grey' }}>
        Ce service permet de déterminer votre niveau de compétence selon le domaine que vous avez choisi.
      </Typography>
      <Paper >
        <Table>
          <TableBody >
            <TableRow>
              <TableCell>A commencé le 1 févr.</TableCell>
              <TableCell>A commencé le 1 févr.</TableCell>
              <TableCell>5 000 francs CFA (BCEAO)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
       <Box height={30} />
      <Typography variant="h4">Description de Service</Typography>
      <Box height={30} />
      <Typography paragraph sx={{ color:'grey' }}>
        Ce teste permet au demandeurs d'emplois de mieux connaitre dans quel domaine il peut mieux s'en sotir et a emploiyer de savoir a quel post peut-il mettre son employé ou son future employé.
      </Typography>
      <div className="line"></div>
       <Box height={30} />
      <Typography variant="h4"> Séances à Venir</Typography>
      <Box height={30} />
      <Typography paragraph sx={{ color:'grey' }}>
        Date:1 févr.2023-24 déc.2035
        </Typography>
         <Typography paragraph sx={{ color:'grey' }}>
        53 séances au total
      </Typography>
       <Paper >
        <Table>
          <TableBody sx={{ border: '2px solid grey' }}>
            <TableRow>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}>mercredi 1 févr.</TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}> 10:00 </TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}>Staff number #1 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}>mercredi 1 févr.</TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}> 9:00 </TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 600 }}>Staff number #2 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Typography paragraph sx={{ color:'grey' }}>
        heure normal d'Afrique de l'Ouest (UTC + 1)       </Typography>
         <Box height={30} />
      <Typography variant="h4"> Coordonnées</Typography>
      <Box height={30} />
      <Typography paragraph sx={{ color:'grey' }}>
        Cotonou, Bénin
        </Typography>
    </Box>
    </Box>
     <ContactezNous />
    </div>
  );
}

export default TestDaptitude;
