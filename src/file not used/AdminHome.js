import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/*import './AdminHome.css';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,  faUser, faTachometerAlt, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';

function AdminHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  
  const iconStyle = {
    marginRight: '8px',
  };

  return (
    <nav
      className="admin-navbar bg-dark text-light position-fixed"
      style={{
        left: 0,
        top: 0,
        bottom: 0,
        width: '250px',
      }}
    >
      <div className="admin-logo text-center py-3">
        <a className="Admin-link" href="/AdminAccueil"> <img src="admin-logo.png" alt="Admin Logo" className="img-fluid" /></a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/AdminDashboard"
            className="nav-link text-light"
            activeClassName="active"
          >  <FontAwesomeIcon icon={faTachometerAlt} style={iconStyle}/>
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Users"
            className="nav-link text-light"
            activeClassName="active"
          >  <FontAwesomeIcon icon={faUser} style={iconStyle}/>
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Settings"
            className="nav-link text-light"
            activeClassName="active"
          >  <FontAwesomeIcon icon={faCog} style={iconStyle}/>
            Settings
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            onClick={handleLogout}
            className="btn_home nav-link text-light"
            style={{ width: '100%', textAlign: 'left' }}
          >  <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle}/> 
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default AdminHome;
