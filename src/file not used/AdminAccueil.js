import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
/*import './AdminAccueil.css';*/
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

const AdminAccueil = () => {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin-graph-data'
        );
        setGraphData(response.data);
      } catch (error) {
        console.error('Error fetching admin graph', error);
      }
    }
    fetchData();
  }, []);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <AdminHome />
      <h1 className="admin-title">Welcome Admin</h1>
      <h2 className="admin-h2">Admin Graph</h2>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="chart-container">
            <BarChart width={900} height={600} data={[graphData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" />
              <Bar dataKey="recruiters" fill="#82ca9d" />
              <Bar dataKey="workers" fill="#ffc658" />
              <Bar dataKey="admins" fill="#ff7300" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccueil;
