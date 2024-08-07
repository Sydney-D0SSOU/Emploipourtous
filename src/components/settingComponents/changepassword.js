import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../Admin/Navbar";
import Sidebar from "../Admin/sidebar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './changeusername.css';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const username = localStorage.getItem('username');
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const handleYes = () => {
    axios.post('http://localhost:5000/api/hokage/change-password', { oldPassword, newPassword, username })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          setLoginMessage('Updated Successfully');
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginMessage('Update Failed');
      });

    setShowConfirmation(false);
  };

  const handleNo = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Change Password</h1>
          <Box height={70} />
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <form className="changeUsernameform" onSubmit={handleSubmit}>
              <label>
                Old Password:
              </label>
              <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required/>
              <label>
                New Password:
              </label>
               <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
              <button type="submit">Changer</button>
              {loginMessage && <p className="error-message">{loginMessage}</p>}
            </form>
          </Box>
        </Box>
      </Box>
      
      <Dialog
        open={showConfirmation}
        onClose={handleNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to change your password?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} color="primary">
            No
          </Button>
          <Button onClick={handleYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ChangePassword;
