import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsPeopleFill} from 'react-icons/bs'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Home() {
	
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
      const [graphData, setGraphData] = useState(null);
 
    useEffect(() => {
	   if (!token) {
      navigate('/Login');
      return;
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin-graph-data', {
			  headers: {
          Authorization: `Bearer ${token}`,
        },
        });
        setGraphData(response.data);
        console.log(response.data);
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
        <main className="main-container">
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>
            <div className="main-cards">
                <div className="cards">
                    <div className="card-inner">
                    <h3>TOTAL USERS</h3>
                        <BsPeopleFill className="card_icon" />
                    </div>
                     <h1>{graphData.totalUsers}</h1>
                </div>
                <div className="cards">
                    <div className="card-inner">
                        <h3>Workers</h3>
                        <BsPeopleFill className="card_icon" />
                    </div>
                     <h1>{graphData.workersCount}</h1>
                </div>
            <div className="cards">
                <div className="card-inner">
                    <h3>Recruter</h3>
                    <BsPeopleFill className="card_icon" />
                </div>
                <h1>{graphData.recruitersCount}</h1>
            </div>
            <div className="cards">
                <div className="card-inner">
                    <h3>Admin</h3>
                    <BsPeopleFill className="card_icon" />
                </div>
                <h1>{graphData.adminsCount}</h1>
            </div>
        </div>
        <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
       <BarChart width={700} height={400} data={[graphData]}>
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
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
        </main >
    );
}

export default Home;
