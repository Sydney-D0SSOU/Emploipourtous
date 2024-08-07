import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from "./sidebarSP";
import Navbar from "./NavbarSP";
import Box from '@mui/material/Box';

const TravaillerSP = () => {
  const [nom, setNoms] = useState('');
  const [prenoms, setPrenoms] = useState('');
  const [email, setEmail] = useState('');
  const [date_naissance, setDate_naissance] = useState('');
  const [numero_telephone, setNumero_telephone] = useState('');
  const [type_emploi, setType_emploi] = useState('');
  const [disponibilite, setDisponibilite] = useState('');
  const [parcours, setParcours] = useState('');
  const [localite, setLocalite] = useState('');
  const [zone, setZone] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-email', { email });
      return response.data.emailExists;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailAlreadyExists = await checkEmailExists(email);
    if (emailAlreadyExists) {
      console.log('Email already exists');
      return;
    }

    if (!isValidEmail(email)) {
      console.log('Please enter a valid email address');
      return;
    }
    try {
      const formData = {
        nom,
        prenoms,
        email,
        date_naissance,
        numero_telephone,
        type_emploi,
        disponibilite,
        parcours,
        zone,
        localite,
      };
      axios
        .post('http://localhost:5000/api/submit', formData)
        .then((response) => {
          if (response.status === 200) {
            console.log('success');
            navigate('/');
          }
        });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
  
  <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1></h1>
                         <Box sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
					  <Container fluid className="">
					  <Row>
						<Col xs={12} md={6} className="blue-section1">
						  <div className="blue-content">
							<h2 className="blue-title2">
							  <span className="">TRAVAILLER</span>
							</h2>
							<p className="travailler-text2">
							  Vous recherchez un travail qui vous convienne, veuillez remplir le formulaire ci-joint.
							</p>
						  </div>
						</Col>
						<Col xs={12} md={6} className="white-section2">
						  <Form onSubmit={handleSubmit}>
							<div className="travailler-form">
							  <Row>
								<Col xs={12} md={6}>
								  <Form.Group>
									<Form.Label>NOM*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  required
									  value={nom}
									  onChange={(e) => setNoms(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Date de naissance*</Form.Label>
									<Form.Control className="inputstyle"
									  type="date"
									  required
									  value={date_naissance}
									  onChange={(e) => setDate_naissance(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Numero de téléphone*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  required
									  value={numero_telephone}
									  onChange={(e) => setNumero_telephone(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Disponibilité*</Form.Label>
									<Form.Control className="inputstyle"
									  type="date"
									  required
									  value={disponibilite}
									  onChange={(e) => setDisponibilite(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Type d'emploi*</Form.Label>
									<Form.Control className="inputstyle"
									  as="select"
									  required
									  value={type_emploi}
									  onChange={(e) => setType_emploi(e.target.value)}
									  style={{ border: '2px solid black' }}
									>
									  <option value="">Sélectionnez un type</option>
									  <option value="à plein temps">à plein temps</option>
									  <option value="à mi temps">à mi temps</option>
									  <option value="à la maison">à la maison</option>
									  <option value="toutes les trois options">toutes les trois options</option>
									</Form.Control>
								  </Form.Group>
								</Col>
								<Col xs={12} md={6}>
								  <Form.Group>
									<Form.Label>Prenoms*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  required
									  value={prenoms}
									  onChange={(e) => setPrenoms(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Email*</Form.Label>
									<Form.Control className="inputstyle"
									  type="email"
									  placeholder="Email"
									  required
									  value={email}
									  onChange={(e) => setEmail(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Zone*</Form.Label>
									<Form.Control
									  as="select"
									  required
									  value={zone}
									  onChange={(e) => setZone(e.target.value)}
									  style={{ border: '2px solid black' }}
									>
									  <option value="">Sélectionnez une Zone</option>
									  <option value="Cotonou">Cotonou</option>
									  <option value="Porto-Novo">Porto-Novo</option>
									</Form.Control>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Localité*</Form.Label>
									<Form.Control className="inputstyle"
									  as="select"
									  required
									  value={localite}
									  onChange={(e) => setLocalite(e.target.value)}
									  style={{ border: '2px solid black' }}
									>
									  <option value="">Sélectionnez une Localité</option>
									  {zone === 'Cotonou' ? (
										<>
										  <option value="Etoil Rouge">Etoil Rouge</option>
										  <option value="Stade de l'amitié">Stade de l'amitié</option>
										  <option value="Sainte Rita">Sainte Rita</option>
										  <option value="Cadjéhoun">Cadjéhoun</option>
										  <option value="Ganhi">Ganhi</option>
										  <option value="Tokpa">Tokpa</option>
										  <option value="PK3">PK3</option>
										  <option value="Le Bélier">Le Bélier</option>
										</>
									  ) : zone === 'Porto-Novo' ? (
										<>
										  <option value="Sèmé">Seme</option>
										  <option value="Sékandji">Sekandji</option>
										  <option value="Wadon">Wadon</option>
										  <option value="Agatha">Agatha</option>
										  <option value="Ouando">Ouando</option>
										  <option value="Djrègbé">Ouando</option>
										  <option value="Kandèvié">Ouando</option>
										  <option value="Sainte Pierre et Paul">Sainte Pierre et Paul</option>
										  <option value="Place Bagnol">Place Bagnol</option>
										</>
									  ) : null}
									</Form.Control>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Pacours Professionnel</Form.Label>
									<Form.Control className="inputstyle"
									  as="textarea"
									  placeholder="Description professionnel"
									  name="detailRequete"
									  required
									  value={parcours}
									  onChange={(e) => setParcours(e.target.value)}
									  style={{ border: '2px solid black' }}
									/>
								  </Form.Group>
								</Col>
							  </Row>
							</div>
							<Row>
							  <Col xs={12} className="submit-button">
								<Button type="submit">Envoyer</Button>
							  </Col>
							</Row>
						  </Form>
						</Col>
					  </Row>
					</Container>
					</Box>
                    </Box>
                </Box>
        </>

    
  );
};


export default TravaillerSP;

