import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function AccordionDash() {
	
	const [expanded, setExpanded] = React.useState();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const [data, setData] = useState([]);
  const [recruite, setRecruite] = useState([]);
  const navigate = useNavigate();
  const adminLocality = localStorage.getItem('localite');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/agence/usersdemande/${adminLocality}`, {})
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
       axios.get(`http://localhost:5000/api/agence/usersoffre/${adminLocality}`)
      .then(response => {
        setRecruite(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiting applications data:', error);
      });
  }, []);
  
  return (
    <div>
				<Accordion
					  sx={{ height: 9 + 'vh' }}
					  expanded={expanded === 'panel1'}
					  onChange={handleAccordionChange('panel1')}
					  sx={{ marginBottom: '10px' }}
					>
					  <AccordionSummary
						expandIcon={<ChevronRightRoundedIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					  >
						<div>
						  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Demande d'emploi</Typography>
						  {data && data.length > 0 ? (
							<>
							  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
								{data[0] && data[0].Localite ? data[0].Localite : 'N/A'}
							  </Typography>
							</>
						  ) : (
							<Typography variant="body2" component="div" sx={{ color: '#555' }}>
							  No data available
							</Typography>
						  )}
						</div>
					  </AccordionSummary>
					  <AccordionDetails>
						{data && data.length > 0 ? (
						  <>
							<Typography>
							  {data[0] && data[0].numero_telephone ? data[0].numero_telephone : 'N/A'}
							</Typography>
							<Typography>
							  {data[0] && data[0].email ? data[0].email : 'N/A'}
							</Typography>
						  </>
						) : (
						  <Typography>
							No data available
						  </Typography>
						)}
					  </AccordionDetails>
					</Accordion>


						  <Box height={30} />
						 <Accordion sx={{ height: 9 + 'vh' }} expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')} sx={{ marginBottom: '10px' }}>
					  <AccordionSummary expandIcon={<ChevronRightRoundedIcon />} aria-controls="panel2a-content" id="panel2a-header">
						<div>
						  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Annonces d'emploi</Typography>
						  {recruite && recruite.length > 0 ? (
							<>
							  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
								{recruite[0] && recruite[0].Localite ? recruite[0].Localite : 'N/A'}
							  </Typography>
							</>
						  ) : (
							<Typography variant="body2" component="div" sx={{ color: '#555' }}>
							  No data available
							</Typography>
						  )}
						</div>
					  </AccordionSummary>
					  <AccordionDetails>
						{recruite && recruite.length > 0 ? (
						  <>
							<Typography>
							  {recruite[0] && recruite[0].entreprise ? recruite[0].entreprise : 'N/A'}
							</Typography>
							<Typography>
							  {recruite[0] && recruite[0].contact_telephonique ? recruite[0].contact_telephonique : 'N/A'}
							</Typography>
							<Typography>
							  {recruite[0] && recruite[0].email ? recruite[0].email : 'N/A'}
							</Typography>
						  </>
						) : (
						  <Typography>
							No data available
						  </Typography>
						)}
					  </AccordionDetails>
					</Accordion>

						  <Box height={30} />
						  <Accordion sx={{ height: '9vh' }} expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')} sx={{ marginBottom: '10px' }}>
					  <AccordionSummary expandIcon={<ChevronRightRoundedIcon />} aria-controls="panel2a-content" id="panel2a-header">
						<div>
						  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Formation</Typography>
						  {data && data.length > 0 && data[2] ? (
							<>
							  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
								{data[2].Localite ? data[2].Localite : 'N/A'}
							  </Typography>
							</>
						  ) : (
							<Typography variant="body2" component="div" sx={{ color: '#555' }}>
							  No data available
							</Typography>
						  )}
						</div>
					  </AccordionSummary>
					  <AccordionDetails>
						{data && data.length > 0 && data[2] ? (
						  <>
							<Typography>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							  malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						  </>
						) : (
						  <Typography>
							No data available
						  </Typography>
						)}
					  </AccordionDetails>
					</Accordion>


						  <Box height={30} />
						  <Accordion sx={{ height: 9 + 'vh' }} expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')} sx={{ marginBottom: '10px' }}>
					  <AccordionSummary expandIcon={<ChevronRightRoundedIcon />} aria-controls="panel2a-content" id="panel2a-header">
						<div>
						  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Demande d'emploi</Typography>
						  {data && data.length > 1 && data[1] ? (
							<>
							  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
								{data[1].Localite ? data[1].Localite : 'N/A'}
							  </Typography>
							</>
						  ) : (
							<Typography variant="body2" component="div" sx={{ color: '#555' }}>
							  No data available
							</Typography>
						  )}
						</div>
					  </AccordionSummary>
					  <AccordionDetails>
						{data && data.length > 1 && data[1] ? (
						  <>
							<Typography>
							  {data[1].numero_telephone ? data[1].numero_telephone : 'N/A'}
							</Typography>
							<Typography>
							  {data[1].email ? data[1].email : 'N/A'}
							</Typography>
						  </>
						) : (
						  <Typography>
							No data available
						  </Typography>
						)}
					  </AccordionDetails>
					</Accordion>

					  <Box height={30} />
				<Accordion sx={{ height: 9 + 'vh' }} expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')} sx={{ marginBottom: '10px' }}>
				  <AccordionSummary expandIcon={<ChevronRightRoundedIcon />} aria-controls="panel2a-content" id="panel2a-header">
					<div>
					  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Demande d'emploi</Typography>
					  {data && data.length > 2 && data[2] ? (
						<>
						  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
							{data[2].Localite ? data[2].Localite : 'N/A'}
						  </Typography>
						</>
					  ) : (
						<Typography variant="body2" component="div" sx={{ color: '#555' }}>
						  No data available
						</Typography>
					  )}
					</div>
				  </AccordionSummary>
				  <AccordionDetails>
					{data && data.length > 2 && data[2] ? (
					  <>
						<Typography>
						  {data[2].numero_telephone ? data[2].numero_telephone : 'N/A'}
						</Typography>
						<Typography>
						  {data[2].email ? data[2].email : 'N/A'}
						</Typography>
					  </>
					) : (
					  <Typography>
						No data available
					  </Typography>
					)}
				  </AccordionDetails>
				</Accordion>

			  <Box height={30} />
			 <Accordion sx={{ height: 9 + 'vh' }} expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')} sx={{ marginBottom: '10px' }}>
		  <AccordionSummary expandIcon={<ChevronRightRoundedIcon />} aria-controls="panel2a-content" id="panel2a-header">
			<div>
			  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#022960' }}>Annonces d'emploi</Typography>
			  {recruite && recruite.length > 1 && recruite[1] ? (
				<>
				  <Typography variant="body2" component="div" sx={{ color: '#555' }}>
					{recruite[1].Localite ? recruite[1].Localite : 'N/A'}
				  </Typography>
				</>
			  ) : (
				<Typography variant="body2" component="div" sx={{ color: '#555' }}>
				  No data available
				</Typography>
			  )}
			</div>
		  </AccordionSummary>
		  <AccordionDetails>
			{recruite && recruite.length > 1 && recruite[1] ? (
			  <>
				<Typography>
				  {recruite[1].entreprise ? recruite[1].entreprise : 'N/A'}
				</Typography>
				<Typography>
				  {recruite[1].contact_telephonique ? recruite[1].contact_telephonique : 'N/A'}
				</Typography>
				<Typography>
				  {recruite[1].email ? recruite[1].email : 'N/A'}
				</Typography>
			  </>
			) : (
			  <Typography>
				No data available
			  </Typography>
			)}
		  </AccordionDetails>
		</Accordion>

      <Box height={30} />
       <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'bottom' ,color: '#022960' }} onClick={()=>{navigate("/agence/List")}}>Voir plus </Typography>
    </div>
  );
}
