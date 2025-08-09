import React, { useState } from "react";
import "./Sidebar.css";
import { FaHome, FaFileInvoice, FaDollarSign, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("Customers");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Invoices", icon: <FaFileInvoice /> },
    { name: "Payments", icon: <FaDollarSign /> },
    { name: "Customers", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">FinancePro</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
