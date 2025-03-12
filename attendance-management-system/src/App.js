import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AttendanceSystem from "./components/AttendanceSystem";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Auth from "./components/Auth"; // Updated to use the new Auth component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/auth">Login / Signup</Link></li>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/attendance">Mark Attendance</Link></li>
            <li><Link to="/employees">Employee Report</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendanceSystem />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
