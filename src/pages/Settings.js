import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
	
	const navigate = useNavigate();
	
	const handleUserName = () => {
    navigate('/ChangeUsername');
  };
  
  const handlePassword = () => {
    navigate('/ChangePassword');
  };
  
  const handleEmail = () => {
    navigate('/ChangeEmail');
  };

    return (
        <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1>Settings</h1>
                         <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
        >
          <ListItemIcon>
            < PersonIcon />
          </ListItemIcon>
          <ListItemText onClick={handleUserName} primary="Change Username." />
        </ListItemButton>
        </List>
        <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
         
        >
          <ListItemIcon>
            <PasswordIcon />
          </ListItemIcon>
          <ListItemText onClick={handlePassword} primary="Change Password." />
        </ListItemButton>
      </List>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
        >
         <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText onClick={handleEmail} primary="Change Email." />
        </ListItemButton>
      </List>
    </Box>
                    </Box>
                </Box>
        </>
    );
}
