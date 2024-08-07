import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Sidebar from "./sidebarSP";
import Navbar from "./NavbarSP";

function RecruteurSP() {
  const [entreprise, setEntreprise] = useState('');
  const [contact_telephonique, setContactTelephonique] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [detail_requete, setDetailRequete] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { entreprise, contact_telephonique, email, sujet, detail_requete };
    axios
      .post('http://localhost:5000/api/recruteur', formData)
      .then((response) => {
        console.log('Success:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
      <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1></h1>
                         <Box sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
                         <div className="">
						  <h1 className="">Recruteur</h1>
						  <p className="">
							Vous désirez recruter un profil bien précis ou vous souhaitez être accompagné dans un processus de recrutement, Veuillez nous accorder un rendez-vous s'il vous plaît.
						  </p>
						  <Form onSubmit={handleSubmit}>
							<Container className="">
							 <div className="left-form">
							  <Row>
								<Col xs={12} md={6}>
								  <Form.Group>
									<Form.Label>Entreprise*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  placeholder="Entreprise"
									  required
									  name="entreprise"
									  value={entreprise}
									  onChange={(e) => setEntreprise(e.target.value)}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Contact téléphonique*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  placeholder="Contact téléphonique"
									  required
									  value={contact_telephonique}
									  onChange={(e) => setContactTelephonique(e.target.value)}
									/>
								  </Form.Group>
								</Col>
								<Col xs={12} md={6}>
								  <Form.Group>
									<Form.Label>Email*</Form.Label>
									<Form.Control className="inputstyle"
									  type="email"
									  placeholder="Email"
									  required
									  value={email}
									  onChange={(e) => setEmail(e.target.value)}
									/>
								  </Form.Group>
								  <Form.Group>
									<Form.Label>Sujet*</Form.Label>
									<Form.Control className="inputstyle"
									  type="text"
									  placeholder="Sujet"
									  required
									  value={sujet}
									  onChange={(e) => setSujet(e.target.value)}
									/>
								  </Form.Group>
								</Col>
							  </Row>
							  </div>
							  <Row>
								<Col>
								  <Form.Group className="right-form">
									<Form.Label>Détail de votre requête</Form.Label>
									<Form.Control className="inputstyle"
									  as="textarea"
									  placeholder="Détail de votre requête"
									  name="detailRequete"
									  value={detail_requete}
									  onChange={(e) => setDetailRequete(e.target.value)}
									  required
									/>
								  </Form.Group>
								</Col>
							  </Row>
							  <Row>
								<Col>
								  <Button type="submit" className="submit-button_rec">
									Envoyer
								  </Button>
								</Col>
							  </Row>
							</Container>
						  </Form>
						</div>
					</Box>
                    </Box>
                </Box>
        </>
  );
}

export default RecruteurSP;
