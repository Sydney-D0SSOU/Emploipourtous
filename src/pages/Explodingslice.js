import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export function Explodeslice() {
  const [localityCounts, setLocalityCounts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/counts-users")
      .then((response) => {
        setLocalityCounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locality counts: " + error);
      });
  }, []);
  
 const data = [
  ["City", "Population"],
  ["Sèmé", localityCounts["Sèmé"] || 0],
  ["Sékandji", localityCounts["Sékandji"] || 0],
  ["Wadon", localityCounts["Wadon"] || 0],
  ["Agatha", localityCounts["Agatha"] || 0],
  ["Ouando", localityCounts["Ouando"] || 0],
  ["Djrègbé", localityCounts["Djrègbé"] || 0],
  ["Kandèvié", localityCounts["Kandèvié"] || 0],
  ["Sainte Pierre et Paul", localityCounts["Sainte Pierre et Paul"] || 0],
  ["Place Bagnol", localityCounts["Place Bagnol"] || 0],
];

const options = {
  title: "Population Porto-Novo",
  chartArea: { width: "50%" },
  colors: ["#b0120a"],
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "Localite",
  },
};

 return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}

