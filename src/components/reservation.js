import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NosService from './Item1Nosservice';
import DefaultNav from './DefaultNav';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ContactezNous from './contacteznous';
import RencontrePrelime from './rencontrePrelime';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Reservation(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <div>
  <DefaultNav />
  <Typography className="text-center mt-4" gutterBottom variant="h4" component="div" sx={{ marginTop: "10rem", display: 'flex', justifyContent: 'center', alignItem: 'center', color: '#000' }}>
									  Nos Services
									</Typography>
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   <Grid container spacing={2}>
            <Grid item xs={12}>
      <Tabs value={value} onChange={handleChange} centered>
         <Tab label="Nos service" {...a11yProps(0)} />
          <Tab label="Rencontre preliminaire" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <NosService/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RencontrePrelime />
      </CustomTabPanel>
      </Grid>
          </Grid>
    </Box>
    <ContactezNous />
    </div>
  );
}
