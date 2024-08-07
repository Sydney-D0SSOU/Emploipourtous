import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export function PieChart() {
  const [localityCounts, setLocalityCounts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/count-users")
      .then((response) => {
        setLocalityCounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locality counts: " + error);
      });
  }, []);

  const data = [
    ["Task", "Hours per Day"],
    ["Tokpa", localityCounts["Tokpa"] || 0],
    ["Ganhi", localityCounts["Ganhi"] || 0],
    ["PK3", localityCounts["PK3"] || 0],
    ["Cadjéhoun", localityCounts["Cadjéhoun"] || 0],
    ["Sainte Rita", localityCounts["Sainte Rita"] || 0],
    ["Etoil Rouge", localityCounts["Etoil Rouge"] || 0],
    ["Stade de l'amitié", localityCounts["Stade de l'amitié"] || 0],
    // Add more localities as needed
  ];

  const options = {
    title: "Cotonou Locality Graph",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}
