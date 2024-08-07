import React, { useEffect, useState } from 'react';
import api from '../components/api';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function DisplayAgence() {
  const [agenceData, setAgenceData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }
    api.get('/agence/list')
      .then((response) => {
        setAgenceData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Agence users:', error);
      });
  }, [navigate, token]);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'idAgence' },
      { Header: 'Localisation', accessor: 'Localisation' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Admin ID', accessor: 'idAdmin' },
      { Header: 'Created At', accessor: 'createdAt' },
      { Header: 'Updated At', accessor: 'updatedAt' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="primary" onClick={() => handleView(row.original)}>
              <Visibility />
            </IconButton>
            <IconButton color="warning" onClick={() => handleEdit(row.original)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(row.original.idAgence)}>
              <Delete />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => agenceData, [agenceData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Use page instead of rows for pagination
    prepareRow,
    state: { pageIndex },
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    setPageSize
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 }, pageSize: 15 },
    useSortBy,
    usePagination
  );

  const handleView = (rowData) => {
    console.log('View:', rowData);
  };

  const handleEdit = (rowData) => {
    console.log('Edit:', rowData);
  };

  const handleDelete = (id) => {
    console.log('Delete ID:', id);
    api.delete(`/agence/${id}`)
      .then(() => {
        setAgenceData(agenceData.filter(item => item.idAgence !== id));
      })
      .catch((error) => {
        console.error('Error deleting:', error);
      });
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Agence Users
          </Typography>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search users..."
            className="form-control mb-3"
          />
          <Box height={40} />
          <TableContainer component={Paper}>
            <Table {...getTableProps()} className="table table-striped table-bordered">
              <TableHead>
                {headerGroups.map(headerGroup => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map(row => { // Use page instead of rows
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2">
              Page {pageIndex + 1} of {pageCount}
            </Typography>
            <Box>
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {'<<'}
              </button>{' '}
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {'<'}
              </button>{' '}
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {'>'}
              </button>{' '}
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {'>>'}
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DisplayAgence;
