// Dashboard.js
import React from "react";
import dashboardImage from "../assets/dashboard.jpg";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
      <h1>Welcome to the Attendance Management System</h1>
      <p>Manage attendance efficiently with this system.</p>
    </div>
  );
};

export default Dashboard;
