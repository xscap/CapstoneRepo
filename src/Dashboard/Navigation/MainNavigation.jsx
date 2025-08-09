import React from "react";
import Navbar from "./Navbar"
import Sidebar from "./SideBar";
import "./mainnavigation.css";

const MainNav = () => {
  return (
    <div className="main-nav-container">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Main Content Area */}
      <div className="main-body">
        <Sidebar />
        <div className="main-content">
          <h1>Welcome to FinancePro Dashboard</h1>
          <p>Your content will go here...</p>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
