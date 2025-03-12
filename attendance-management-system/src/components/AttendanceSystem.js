import React, { useState } from "react";
import axios from "axios";
import "./AttendanceSystem.css";
import attendanceImage from "../assets/attendance.jpg";
import { useNavigate } from "react-router-dom";

const AttendanceSystem = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // Mark attendance
  const markAttendance = async () => {
    try {
      await axios.post("http://localhost:5000/attendance", { user });
      setUser("");
      navigate("/employees"); // Redirect to employees page after marking attendance
    } catch (error) {
      console.error("Error marking attendance", error);
    }
  };

  return (
    <div className="container p-4">
      <img src={attendanceImage} alt="Attendance" className="attendance-image mb-4" />
      <h2 className="text-xl font-bold mb-4">Attendance Management System</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <button onClick={markAttendance} className="bg-blue-500 text-white p-2 rounded ml-2">
        Mark Attendance
      </button>
    </div>
  );
};

export default AttendanceSystem;
