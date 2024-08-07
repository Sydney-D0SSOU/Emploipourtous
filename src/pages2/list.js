import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../components/Agence/sidebar";
import { Box } from "@mui/material";
import Navbar from "../components/Agence/Navbar";
import { useNavigate } from 'react-router-dom';

export default function AgenceList() {
	
	 const [travaillerData, setTravaillerData] = useState([]);
  const [recruterData, setRecruterData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    /*if (!token) {
      navigate('/Login');
      return;
    }*/

    /*axios
      .get('http://localhost:5000/api/all_recruter_users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRecruterData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });*/
       const adminLocality = localStorage.getItem('localite');
		axios.get(`http://localhost:5000/api/users-by-locality/${adminLocality}`)
		  .then((response) => {
			setRecruterData(response.data);
		  })
		  .catch((error) => {
			console.error('Error fetching users by locality:', error);
		  });
    axios
      .get('http://localhost:5000/api/all_users', {})
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
      
      axios.get(`http://localhost:5000/api/usersdemande-by-locality/${adminLocality}`)
		  .then((response) => {
			 setTravaillerData(response.data);
		  })
		  .catch((error) => {
			console.error('Error fetching users by locality:', error);
		  });
    /*axios
      .get('http://localhost:5000/api/all_job_users', {})
      .then((response) => {
        setTravaillerData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });*/
  }, [navigate, token]);
    return (
        <>
            <Navbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
						 <h1 className="Admin_title">List of all Users</h1>
							  <div className="container-fluid">
								<div className="row">
								  <div className="col-12">
									<p className="Ent">All Entreprise</p>
									<div className="travail_section">
									  <table className="table table-responsive">
										<thead>
										  <tr>
											<th>Nom de L'entreprise</th>
											<th>Email</th>
											<th>Telephone</th>
											<th>Sujet</th>
											<th>Detail de Requete</th>
											<th>Zone</th>
											<th>Locality</th>
											{/* Add other columns */}
										  </tr>
										</thead>
										<tbody>
										  {recruterData.map((item) => (
											<tr key={item.id}>
											  <td>{item.entreprise}</td>
											  <td>{item.email}</td>
											  <td>{item.contact_telephonique}</td>
											  <td>{item.sujet}</td>
											  <td>{item.detail_requete}</td>
											   <td>{item.zone}</td>
											   <td>{item.Localite}</td>
											  {/* Add other columns */}
											</tr>
										  ))}
										</tbody>
									  </table>
									</div>
								  </div>
								  <div className="col-12">
									<p className="Ent">All Employee</p>
									<div className="travail_section">
									  <table className="table table-responsive">
										<thead>
										  <tr>
											<th>Nom</th>
											<th>Prenom</th>
											<th>Email</th>
											<th>Date de Naissance</th>
											<th>Telephone</th>
											<th>Disponibilité</th>
											<th>Type D'emploi</th>
											<th>Pacours Professionnel</th>
											<th>zone</th>
											<th>Localite</th>
											{/* Add other columns */}
										  </tr>
										</thead>
										<tbody>
										  {travaillerData.map((item) => (
											<tr key={item.id}>
											  <td>{item.nom}</td>
											  <td>{item.prenoms}</td>
											  <td>{item.email}</td>
											  <td>{item.date_naissance}</td>
											  <td>{item.numero_telephone}</td>
											  <td>{item.disponibilite}</td>
											  <td>{item.type_emploi}</td>
											  <td>{item.parcours}</td>
											  <td>{item.zone}</td>
											  <td>{item.Localite}</td>
											  {/* Add other columns */}
											</tr>
										  ))}
										</tbody>
									  </table>
									</div>
								  </div>
								  <div className="col-12">
									<p className="Ent">Contact Form</p>
									<div className="travail_section">
									  <table className="table table-responsive">
										<thead>
										  <tr>
											<th>Nom</th>
											<th>Adresse Mail</th>
											<th>Telephone</th>
											<th>Adresse</th>
											<th>Objet</th>
											<th>Sujet</th>
											{/* Add other columns */}
										  </tr>
										</thead>
										<tbody>
										  {contactData.map((item) => (
											<tr key={item.id}>
											  <td>{item.noms}</td>
											  <td>{item.email}</td>
											  <td>{item.telephone}</td>
											  <td>{item.adresse}</td>
											  <td>{item.objet}</td>
											  <td>{item.message}</td>
											  {/* Add other columns */}
											</tr>
										  ))}
										</tbody>
									  </table>
									</div>
								  </div>
								</div>
							  </div>
                    </Box>
                </Box>
        </>
    );
}
