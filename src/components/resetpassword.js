import React, { useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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


const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/checkUser', {
      email: email,
    });

    if (response.status === 201) {
      alert('User not found. Please check your email address.');
    } else {
      alert('Password reset email sent successfully.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
};

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Paper elevation={3} style={styles.paper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                style={styles.input}
                onChange={handleEmailChange}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.submitButton}
          >
            Send Email
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ResetPasswordPage;


