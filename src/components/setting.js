/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './settings.css';

function Settings() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
   useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/update_settings', {
        username,
        newPassword,
        newEmail,
      });

      if (response.status === 200) {
        setSuccessMessage('Settings updated successfully!');
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while updating settings.');
      setSuccessMessage('');
    }
  };
}, [navigate]);

  return (
    <div className="settingsbody">
      <Container className="mt-5">
        <Link to="/AdminAccueil" className="btn btn-primary return-button">
          Return
        </Link>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="settings-card">
              <SettingOption icon={faUserCog} title="Change Username" description="Change your username here.">
                <UsernameForm username={username} setUsername={setUsername} />
              </SettingOption>
              <SettingOption icon={faKey} title="Change Password" description="Change your password here.">
                <PasswordForm newPassword={newPassword} setNewPassword={setNewPassword} />
              </SettingOption>
              <SettingOption icon={faEnvelope} title="Change Email" description="Change your email address here.">
                <EmailForm newEmail={newEmail} setNewEmail={setNewEmail} />
              </SettingOption>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

function SettingOption({ icon, title, description, children }) {
  return (
    <div className="settings-option">
      <FontAwesomeIcon icon={icon} className="settings-icon" />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}

function UsernameForm({ username, setUsername }) {
  return (
    <Form className="mb-3" onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="newUsername">
        <Form.Label>New Username</Form.Label>
        <Form.Control
          className="newuserform"
          type="text"
          placeholder="Enter new username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>
        Save Username
      </Button>
    </Form>
  );
}

function PasswordForm({ newPassword, setNewPassword }) {
  return (
    <Form className="mb-3" onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          className="newuserform"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>
        Change Password
      </Button>
    </Form>
  );
}

function EmailForm({ newEmail, setNewEmail }) {
  return (
    <Form className="mb-3" onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="newEmail">
        <Form.Label>New Email</Form.Label>
        <Form.Control
          className="newuserform"
          type="email"
          placeholder="Enter new email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>
        Change Email
      </Button>
    </Form>
  );
}

export default Settings;*/

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './settings.css';

function Settings() {
	
 const navigate = useNavigate();
 /* const token = localStorage.getItem('token');
  
   useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }
    

  const handlePasswordChange = () => {
    navigate('/passwordchange');
  };
  return (
    <div className="settings-container">
      <div className="setting-item" onClick={handlePasswordChange}>
        <h3><FontAwesomeIcon icon={faLock} /> Change Password</h3>
      </div>

      <div className="setting-item">
        <h3><FontAwesomeIcon icon={faEnvelope} /> Change Email</h3>
      </div>

      <div className="setting-item">
        <h3><FontAwesomeIcon icon={faUser} /> Change Username</h3>
      </div>
    </div>
  );
}

export default Settings;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

function Settings() {
	
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
 
    useEffect(() => {
	   if (!token) {
      navigate('/Login');
      return;
    }
  }, []);
  
  const handlePasswordChange = () => {
    navigate('/passwordchange');
  };

    return (
       <main className="settings-container">
      <div className="setting-item" onClick={handlePasswordChange}>
        <h3><FontAwesomeIcon icon={faLock} /> Change Password</h3>
      </div>

      <div className="setting-item">
        <h3><FontAwesomeIcon icon={faEnvelope} /> Change Email</h3>
      </div>

      <div className="setting-item">
        <h3><FontAwesomeIcon icon={faUser} /> Change Username</h3>
      </div>
    </main>
    );
}

export default Settings;

