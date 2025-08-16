import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./dbcontent.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [12000, 15000, 14000, 17000, 16000, 19000],
      backgroundColor: "#4eaaff",
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "Monthly Revenue" },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: "#eee" } },
  },
};

const DashboardCntnt = () => (
  <div className="dashboard-content">
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>$19,000</h3>
        <p>Total Revenue</p>
      </div>
      <div className="stat-card">
        <h3>1,250</h3>
        <p>Active Customers</p>
      </div>
      <div className="stat-card">
        <h3>320</h3>
        <p>Invoices</p>
      </div>
    </div>
    <div className="dashboard-chart">
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default DashboardCntnt;