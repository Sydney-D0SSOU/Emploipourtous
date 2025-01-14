import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Switch,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Sidebar from '../components/Admin/sidebar';
import Navbar from '../components/Agence/Navbar';
import api from '../components/api';
import { useNavigate } from 'react-router-dom';

function AgenceDisplayOffre() {
  const [agenceUsers, setAgenceUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const agenceLocality = localStorage.getItem('localisation');

  useEffect(() => {
    if (!token) {
      navigate('/agence/Recruteur');
      return;
    }

    const fetchData = async () => {
      try {
        console.log(agenceLocality);
        
        const response = await api.get('/recruteur/list');
        setAgenceUsers(response.data);
      } catch (error) {
        console.error('Error fetching recruiting applications data:', error);
      }
    };

    fetchData();
  }, [navigate, token]);

  const handleStatusToggle = (userId) => {
    setAgenceUsers((prev) =>
      prev.map((user) =>
        user.idE === userId
          ? { ...user, status: user.status === 'En attente' ? 'Traité' : 'En attente' }
          : user
      )
    );
  };

  const handleDetailsOpen = (user) => {
    setSelectedUser(user);
    setOpenDetailsDialog(true);
  };

  const handleDetailsClose = () => {
    setSelectedUser(null);
    setOpenDetailsDialog(false);
  };

  const columns = [
    { field: 'name', headerName: 'Nom', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'localisation', headerName: 'Localisation', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'contact', headerName: 'Contact', flex: 1, headerAlign: 'center', align: 'center' },
    {
      field: 'status',
      headerName: 'État',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <>
          <Switch
            checked={params.row.status === 'Traité'}
            onChange={() => handleStatusToggle(params.row.idE)}
            color="success"
          />
          {params.row.status}
        </>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          startIcon={<VisibilityIcon />}
          onClick={() => handleDetailsOpen(params.row)}
        >
          Voir
        </Button>
      ),
    },
  ];

  // Filtrer les utilisateurs si agenceLocality est défini, sinon afficher tous
  const filteredUsers = agenceLocality
    ? agenceUsers.filter(user => user.localisation?.toLowerCase() === agenceLocality.toLowerCase())
    : agenceUsers;  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Entreprises Recruteurs
          </Typography>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={filteredUsers.map((user, index) => ({ ...user, id: index }))}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              sx={{
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#ffeb3b',
                  color: '#000000',
                  fontWeight: 'bold',
                },
                '& .MuiDataGrid-row:nth-of-type(even)': {
                  backgroundColor: '#f9f9f9',
                },
                '& .MuiDataGrid-row:nth-of-type(odd)': {
                  backgroundColor: '#ffffff',
                },
              }}
            />
          </div>
          <Dialog open={openDetailsDialog} onClose={handleDetailsClose} maxWidth="sm" fullWidth>
            <DialogContent>
              <Box sx={{ position: 'relative', p: 3, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
                <IconButton
                  edge="end"
                  onClick={handleDetailsClose}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h5" color="primary" textAlign="center" gutterBottom>
                  {selectedUser?.name || 'Nom indisponible'}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="body1"><strong>Email :</strong> {selectedUser?.email || 'Non renseigné'}</Typography>
                  <Typography variant="body1"><strong>Localisation :</strong> {selectedUser?.localisation || 'Non renseignée'}</Typography>
                  <Typography variant="body1"><strong>Contact :</strong> {selectedUser?.contact || 'Non renseigné'}</Typography>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default AgenceDisplayOffre;