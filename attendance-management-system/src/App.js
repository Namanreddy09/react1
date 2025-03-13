import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AttendanceSystem from "./components/AttendanceSystem";// Import the Employee attendance marking component
import Dashboard from "./pages/Dashboard"; // Import the dashboard component
import Employees from "./pages/Employees"; //// Imported the Employee attendance data records component
import Auth from "./components/Auth";  // Imported  the new signup and Login as cobined page component
import Logout from "./components/Logout"; // Import the new Logout component
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
            <li><Link to="/logout">Logout</Link></li> {/* Add Logout link */}
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendanceSystem />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/logout" element={<Logout />} /> {/* Logout Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
