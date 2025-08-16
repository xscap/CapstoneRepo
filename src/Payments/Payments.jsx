import React, { useState } from "react";
import "./payments.css";
import PaymentModal from "./PaymentModal";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Payments = () => {
  const [showModal, setShowModal] = useState(false);

  const payments = [
    { date: "June 20, 2024", desc: "Invoice #12345", amount: "$500", status: "Paid" },
    { date: "June 15, 2024", desc: "Subscription Renewal", amount: "$100", status: "Paid" },
    { date: "May 25, 2024", desc: "Invoice #12344", amount: "$750", status: "Paid" },
    { date: "May 10, 2024", desc: "Invoice #12343", amount: "$1,200", status: "Paid" },
    { date: "April 15, 2024", desc: "Invoice #12342", amount: "$900", status: "Paid" },
  ];

  // Chart Data
  const chartData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Payments",
        data: [2000, 1500, 2200, 1800, 3000, 2500, 1500],
        borderColor: "black",
        backgroundColor: "rgba(0,0,0,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="payments-container">
      {/* Header */}
      <div className="payments-header">
        <h2>Payments</h2>
        <button className="make-payment-btn" onClick={() => setShowModal(true)}>
          Make a Payment
        </button>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <p>Total Payments</p>
          <h3>$12,500</h3>
        </div>
        <div className="card">
          <p>Outstanding Amount</p>
          <h3>$3,200</h3>
        </div>
        <div className="card">
          <p>Next Due Date</p>
          <h3>July 15, 2024</h3>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <h3>Payments Overview</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td>{p.date}</td>
                <td>{p.desc}</td>
                <td>{p.amount}</td>
                <td><span className="paid-badge">{p.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <h3>Payment Trends</h3>
        <h2>$12,500</h2>
        <p className="trend">Last 12 Months <span className="positive">+15%</span></p>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Modal */}
      {showModal && <PaymentModal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Payments;
