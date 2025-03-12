import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;