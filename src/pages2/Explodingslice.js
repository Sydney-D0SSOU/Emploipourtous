import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export function Explodeslice() {
  const [localityCounts, setLocalityCounts] = useState("");

  useEffect(() => {
    const adminLocality = localStorage.getItem('localite');

    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin-graph-data/${adminLocality}`);
        setLocalityCounts(response.data.data);
        console.log(localityCounts.workers);
      } catch (error) {
        console.error('Error fetching admin graph', error);
      }
    }

    fetchData();
  }, []);

  const data = [
    ["Users", "Number"],
    ["Recruteur", localityCounts.recruiters || 0],
    ["Travailler", localityCounts.workers || 0],
  ];

  const options = {
    title: "Recruteur / Travailler",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
