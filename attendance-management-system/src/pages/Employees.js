import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employees.css"; 

const Employees = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/attendance")
      .then((response) => setAttendance(response.data))
      .catch((error) => console.error("Error fetching attendance records", error));
  }, []);

  return (
    <div className="employees-container">
      <h2>Employee Attendance Records</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((entry, index) => (
            <tr key={index} className={entry.status === "Present" ? "present" : "absent"}>
              <td>{entry.user}</td>
              <td className={entry.status === "Present" ? "status-present" : "status-absent"}>
                {entry.status}
              </td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
