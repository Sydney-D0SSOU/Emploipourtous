import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './nav.css';

class DefaultNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLink: false,
      currentSequence: '',
    };
    this.timer = null; // Initialize a timer variable
  }

  componentDidMount() {
    // Add an event listener to listen for keydown events
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove the event listener and clear the timer when the component unmounts
    document.removeEventListener('keydown', this.handleKeyDown);
    clearTimeout(this.timer);
  }

  handleKeyDown = (e) => {
    // Check if the pressed key is '1' and the sequence '1234' has not been completed yet
    if (e.key === '1' && !this.state.showLink) {
      this.setState({ currentSequence: '1' });

      // Set a timer for 5 seconds (5000 milliseconds)
      this.timer = setTimeout(() => {
        this.setState({ currentSequence: '' });
      }, 5000);
    } else if (e.key === '2' && this.state.currentSequence === '1') {
      this.setState({ currentSequence: '12' });
    } else if (e.key === '3' && this.state.currentSequence === '12') {
      this.setState({ currentSequence: '123' });
    } else if (e.key === '4' && this.state.currentSequence === '123') {
      this.setState({ showLink: true, currentSequence: '' });
      clearTimeout(this.timer); // Clear the timer when the sequence is completed
    } else {
      // Reset the sequence and clear the timer if any other key is pressed
      this.setState({ currentSequence: '' });
      clearTimeout(this.timer);
    }
  };

  render() {
    const { showLink } = this.state;
    const socialLinkStyle = {
      fontSize: '24px',
      marginRight: '20px',
    };

    const fixednav = "navbar navbar-expand-lg navbar-light bg-light fixed-top";

    return (
      <div className="container">
        <header>
          <nav className={fixednav}>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid logo1"
              />
            </a>
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

            <div className="navbar-collapse collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="activeLink"
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/travailler"
                    className="nav-link"
                    activeClassName="activeLink"
                  >
                    Travailler
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/recruteur"
                    className="nav-link"
                    activeClassName="activeLink"
                  >
                    Recruteur
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Services"
                    className="nav-link"
                    activeClassName="activeLink"
                  >
                    Services
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  {showLink && (
                    <NavLink
                      to="/Login"
                      className="nav-link"
                      activeClassName="activeLink"
                    >
                      Ce Connecté
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <a href="https://www.linkedin.com/" className="social-link" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/" className="social-link" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.whatsapp.com/" className="social-link" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default DefaultNav;
