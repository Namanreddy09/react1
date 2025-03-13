import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/auth"); // Redirect to login/signup page after logout
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
