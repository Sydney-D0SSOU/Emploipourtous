import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  const initials = name.split(' ').map((part) => part[0]).join('');

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}


const cellStyle = {
  borderRight: 'none',
  borderLeft: 'none',
};

const tableContainerStyle = {
  maxHeight: '400px',
  overflowY: 'auto',
  marginBottom: '20px',
};

export default function BackgroundLetterAvatars() {
  const [tableData1, setTableData1] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

 /* useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }
   const adminLocality = localStorage.getItem('localite');
    axios
      .get(`http://localhost:5000/api/tabledata/${adminLocality}`, {})
      .then((response) => {
        setTableData1(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  }, [navigate, token]);*/

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '20px', ...tableContainerStyle }}>
      <Table>
        <TableHead sx={{ backgroundColor: 'grey' }}>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>#</TableCell>
            <TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Name</TableCell>
            <TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Type</TableCell>
            <TableCell sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 600 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData1.map((row) => (
            <TableRow key={row.number}>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
                {row.number}
              </TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
                <Avatar {...stringAvatar(row.name)} />
                {row.name}
              </TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
                {row.type}
              </TableCell>
              <TableCell style={cellStyle} sx={{ backgroundColor: '#ECEFF1', fontWeight: 600 }}>
                <Button
                  variant="contained"
                  color={row.status === 'complete' ? 'success' : 'error'}
                >
                  {row.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
