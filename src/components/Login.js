import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import DefaultNav from './DefaultNav';
import backgroundImage from './login.jpg';
import './login.css';
import api from '../components/api'; // Importez l'instance Axios configurée

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('admin/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { payload, token } = response.data;

        localStorage.setItem('token', token);
        axios.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
       // localStorage.setItem('id', payload.id);
       // localStorage.setItem('email', payload.email);

        // Assuming the user role is also sent in the payload or another way
       // if (payload.role === 'Admin') {
       //    navigate('/AdminAccueil');
       //  }/* else if (payload.role === 'Agence') {*/
        //   navigate('/agence');
        // } else if (payload.role === 'chef_de_quatier') {
        //   navigate('/chef_de_quartier');
        // } else {
        //   console.error('Unknown role:', payload.role);
        //   setLoginMessage('Unknown role');
        // }

        // Redirect to a generic dashboard for now, adjust based on actual role data
        navigate('/AdminAccueil');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginMessage('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="Login-container">
      <DefaultNav />
      <section className="login-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
              <input type={passwordVisible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label>Password</label>
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="/ResetPassword">Forgot Password?</a>
            </div>
            <button type="submit" className="btn_login">Login</button>
            {loginMessage && <p className="error-message">{loginMessage}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
