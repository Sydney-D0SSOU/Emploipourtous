import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Badge from '@mui/material/Badge';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppStore } from '../../appStore';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExploreIcon from '@mui/icons-material/Explore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import logo from '../logo.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const open = useAppStore((state) => state.dopen);

  const activeRoute = location.pathname;
  
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/notif-message-count')
      .then((response) => {
        setMessageCount(response.data.totalCount);
        console.log(response.data.totalCount);
      })
      .catch((error) => {
        console.error('Error fetching message count:', error);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="img-fluid logo"
              />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/AdminAccueil") }}>
            <ListItemButton
              sx={{
                minHeight: 0,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: activeRoute === '/AdminAccueil' ? "#022960" : 'transparent',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: activeRoute === '/AdminAccueil' ? "#fff" : "#022960",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/AdminAccueil' ? "#fff" : "#022960", fontWeight: 200 }}>
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: activeRoute === '' ? "#022960" : 'transparent',
              }}
              onClick={() => { navigate("#") }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: activeRoute === '' ? "#fff" : "#022960",
                }}
              >
                <ExploreIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '' ? "#fff" : "#022960", fontWeight: 200 }}>
                Réseau
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/AgenceList") }}>
            <ListItemButton>
              <ListItemText sx={{ color: "#022960", fontWeight: 200 }} inset primary="Agences" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/offreList") }}>
            <ListItemButton>
              <ListItemText sx={{ color: "#022960", fontWeight: 200 }} inset primary="Offre" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/demandeList") }}>
            <ListItemButton>
              <ListItemText sx={{ color: "#022960", fontWeight: 200 }} inset primary="Demande" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/Validation") }}>
            <ListItemButton>
              <ListItemText sx={{ color: "#022960", fontWeight: 200 }} inset primary="Validation" />
            </ListItemButton>
          </ListItem>
            <ListItem disablePadding onClick={() => { navigate("/myforms") }}>
            <ListItemButton>
              <ListItemText sx={{ color: "#022960", fontWeight: 200 }} inset primary="Forms" />
            </ListItemButton>
          </ListItem>
          <Box height={40} />
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Notifications") }}>
            <ListItemButton sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor: activeRoute === '/Notifications' ? "#022960" : 'transparent',
            }} >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: activeRoute === '/Notifications' ? "#fff" : "#022960",
              }} >
                <Badge badgeContent={messageCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/Notifications' ? "#fff" : "#022960", fontWeight: 200 }}>
                Notifications
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Statistics") }}>
            <ListItemButton sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor: activeRoute === '/Statistics' ? "#022960" : 'transparent',
            }} >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: activeRoute === '/Statistics' ? "#fff" : "#022960",
              }} >
                <BarChartSharpIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/Statistics' ? "#fff" : "#022960", fontWeight: 200 }}>
                Statistiques
              </Typography>
            </ListItemButton>
          </ListItem>
         {/* <Box height={20} />
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Options") }}>
            <ListItemButton sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor: activeRoute === '/Options' ? "#022960" : 'transparent',
            }} >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: activeRoute === '/Options' ? "#fff" : "#022960",
              }} >
                <SettingsRoundedIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/Options' ? "#fff" : "#022960", fontWeight: 200 }}>
                Options
              </Typography>
            </ListItemButton>
          </ListItem>*/}
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Aide") }}>
            <ListItemButton sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor: activeRoute === '/Aide' ? "#022960" : 'transparent',
            }} >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: activeRoute === '/AideRoute' ? "#fff" : "#022960",
              }} >
                <HelpRoundedIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/Aide' ? "#fff" : "#022960", fontWeight: 200 }}>
                Aide et Support
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
