import React, { useState } from "react";
import axios from "axios";
import "./AttendanceSystem.css";
import attendanceImage from "../assets/attendance.jpg";
import { useNavigate } from "react-router-dom";

const AttendanceSystem = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Mark attendance
  const markAttendance = async () => {
    try {
      await axios.post("http://localhost:5000/attendance", { user }); // No need to store response
      setMessage("Attendance marked successfully!");
      setUser("");
      setTimeout(() => {
        navigate("/employees");
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Error marking attendance");
      }
    }
  };

  return (
    <div className="attendance-container">
      <img src={attendanceImage} alt="Attendance" className="attendance-image" />
      <h2 className="title">Attendance Management System</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="input-field"
      />
      <button onClick={markAttendance} className="submit-btn">
        Mark Attendance
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AttendanceSystem;
