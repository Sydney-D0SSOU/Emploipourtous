import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogContent,
  TextField,
  TableFooter,
  TablePagination
} from '@mui/material';

import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import api from '../components/api';

function DisplayDemande() {
  const [candidatUsers, setCandidatUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Nombre de lignes par page
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }

    api.get('/candidat/list')
      .then((response) => {
        setCandidatUsers(response.data.sort((a, b) => b.idCand - a.idCand)); // Trier par ordre décroissant
      })
      .catch((error) => {
        console.error('Error fetching candidat users:', error);
      });
  }, [navigate, token]);

  const handleDetailsOpen = (user) => {
    setSelectedUser(user);
    setOpenDetailsDialog(true);
  };

  const handleDetailsClose = () => {
    setSelectedUser(null);
    setOpenDetailsDialog(false);
  };

  const handleEditUser = (userId) => {
    console.log(`Editing user with id: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    console.log(`Deleting user with id: ${userId}`);
  };

  const handleDownloadCV = async (cvUrl) => {
    if (!cvUrl) {
      console.error('Aucune URL fournie pour le téléchargement');
      return;
    }

    try {
      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Extraction du nom du fichier et de son extension depuis l'URL
      const fileName = cvUrl.split('/').pop();
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  const filteredUsers = candidatUsers.filter((user) =>
    user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.locality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage + 1); // Tableau MUI commence les pages à 0
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Demandes
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher des utilisateurs..."
            sx={{ mb: 2 }}
          />
          <Box height={20} />
          {filteredUsers.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>#</TableCell>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>Nom</TableCell>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>Prénom</TableCell>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>Email</TableCell>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>Localité</TableCell>
                    <TableCell sx={{ backgroundColor: '#ffeb3b' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentUsers.map((user, index) => (
                    <TableRow key={user.idCand}>
                      <TableCell sx={{ backgroundColor: '#fff' }}>{indexOfFirstUser + index + 1}</TableCell>
                      <TableCell sx={{ backgroundColor: '#fff' }}>{user.nom}</TableCell>
                      <TableCell sx={{ backgroundColor: '#fff' }}>{user.prenom}</TableCell>
                      <TableCell sx={{ backgroundColor: '#fff' }}>{user.email}</TableCell>
                      <TableCell sx={{ backgroundColor: '#fff' }}>{user.locality}</TableCell>
                      <TableCell sx={{ backgroundColor: '#fff' }}>
                        <IconButton onClick={() => handleDetailsOpen(user)}>
                          <VisibilityIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => handleEditUser(user.idCand)}>
                          <EditIcon color="secondary" />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteUser(user.idCand)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                        {user.cv && (
                          <IconButton onClick={() => handleDownloadCV(user.cv)}>
                            <GetAppIcon color="action" />
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[itemsPerPage]}
                    colSpan={6}
                    count={filteredUsers.length}
                    rowsPerPage={itemsPerPage}
                    page={currentPage - 1} // Tableau MUI commence les pages à 0
                    onPageChange={handleChangePage}
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} sur ${count}`}
                    labelRowsPerPage="Lignes par page"
                  />
                </TableRow>
              </TableFooter>
            </TableContainer>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Aucun utilisateur correspondant trouvé.
            </Typography>
          )}
          <Dialog open={openDetailsDialog} onClose={handleDetailsClose}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDetailsClose}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <Typography variant="h6">{selectedUser?.nom}</Typography>
              <Typography variant="h6">{selectedUser?.prenom}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.locality}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.datenaiss}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.jourdispo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedUser?.cv}
              </Typography>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default DisplayDemande;
