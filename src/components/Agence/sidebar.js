import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../../appStore';
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

export default function SidebarAgence() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);
  const userId = localStorage.getItem('id');
  const [messageCount, setMessageCount] = useState(0);
  const location = useLocation();
  const activeRoute = location.pathname;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notif-message-count-agence/${userId}`)
      .then((response) => {
        setMessageCount(response.data.totalCount);
      })
      .catch((error) => {
        console.error('Error fetching message count:', error);
      });
  }, []);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30}/>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
  </DrawerHeader>
        <Divider />
        <List>
         <ListItem disablePadding  >
             
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
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/agence")}}>
              <ListItemButton
                sx={{
                  minHeight: 0,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: activeRoute === '/agence' ? "#022960" : 'transparent',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: activeRoute === '/agence' ? "#fff" : "#022960",
                  }}
                >
                  <DashboardIcon/>
                </ListItemIcon>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/agence' ? "#fff" : "#022960", fontWeight: 200  }}>
                                               Dashboard
                                            </Typography>
              </ListItemButton>
            </ListItem>
             <ListItem disablePadding sx={{ display: 'block' }} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "#022960"
                  }}
                >
                  <ExploreIcon/>
                </ListItemIcon>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#022960", fontWeight: 200  }}>
                                              Réseau
                                            </Typography>
              </ListItemButton>
            </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText onClick={()=>{navigate("/agence/zone")}} sx={{ color: "#022960", fontWeight: 200  }} inset primary="Zone" />
        </ListItemButton>
      </ListItem>
       <ListItem disablePadding>
        <ListItemButton>
          <ListItemText onClick={()=>{navigate("/agence/Recruteur")}} sx={{ color: "#022960", fontWeight: 200  }} inset primary="Recruteur" />
        </ListItemButton>
      </ListItem>
       <ListItem disablePadding>
        <ListItemButton>
          <ListItemText onClick={()=>{navigate("/agence/Demandeur")}} sx={{ color: "#022960", fontWeight: 200  }} inset primary="Demandeur" />
        </ListItemButton>
      </ListItem>
       <ListItem disablePadding>
        <ListItemButton>
          <ListItemText onClick={()=>{navigate("/agence/Valide")}} sx={{ color: "#022960", fontWeight: 200  }} inset primary="Valide" />
        </ListItemButton>
      </ListItem>
      <Box height={40}/>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/agence/Notifications")}}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, backgroundColor: activeRoute === '/agence/Notifications' ? "#022960" : 'transparent',}} >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: activeRoute === '/agence/Notifications' ? "#fff" : "#022960", }} >
                 <Badge badgeContent={messageCount} color="error">
                  <NotificationsIcon />
                </Badge>
                </ListItemIcon>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/agence/Notifications' ? "#fff" : "#022960", fontWeight: 200  }}>
                                              Notifications
                                            </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/agence/Statistics")}}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, backgroundColor: activeRoute === '/agence/Statistics' ? "#022960" : 'transparent',}} >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: activeRoute === '/agence/Statistics' ? "#fff" : "#022960", }} >
                  <BarChartSharpIcon/>
                </ListItemIcon>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: activeRoute === '/agence/Statistics' ? "#fff" : "#022960", fontWeight: 200  }}>
                                               Statistiques
                                            </Typography>
              </ListItemButton>
            </ListItem>
           
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("#")}}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: "#022960" }} >
                  <HelpRoundedIcon/>
                </ListItemIcon>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#022960", fontWeight: 200  }}>
                                               Aide et Support
                                            </Typography>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      
    </Box>
  );
}
