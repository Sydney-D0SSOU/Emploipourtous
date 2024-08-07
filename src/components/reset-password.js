import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  form: {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: '1rem',
  },
  submitButton: {
    width: '100%',
  },
};

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userEmail = searchParams.get('email');
    if (userEmail) {
      setEmail(userEmail);
    } else {
      navigate('/Login'); 
    }
  }, [location.search, navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  
   const handleResetPassword = () => {
    setPasswordsMatch(password === confirmPassword);

    if (passwordsMatch) {
      axios.post('http://localhost:5000/reset-password', {
        email: email,
        password: password,
      })
        .then((response) => {
			alert('Password reset successful.');
          console.log('Password reset successful:', response.data);
          navigate('/Login');
        })
        .catch((error) => {
			alert('Password reset failed.');
          console.error('Password reset failed:', error);
        });
    }
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Paper elevation={3} style={{ padding: '2rem' }} style={styles.paper}>
        <TextField
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          style={styles.input}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          value={confirmPassword}
          style={styles.input}
          onChange={handleConfirmPasswordChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        {!passwordsMatch && <p>Passwords do not match.</p>}
       
        <Button variant="contained" color="primary" onClick={handleResetPassword}>
          Reset Password
        </Button>
      </Paper>
    </Container>
  );
};

export default PasswordReset;
