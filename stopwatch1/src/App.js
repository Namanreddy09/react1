import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Handle Timer Logic
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Format Time Display
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="container">
      {/* Dark Mode Toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Stylish Stopwatch Heading */}
      <h1 className="title">Stopwatch</h1>

      {/* Stopwatch Display */}
      <h1 className="stopwatch">{formatTime(time)}</h1>

      {/* Stopwatch Controls */}
      <div className="buttons">
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
      </div>
    </div>
  );
};

export default App;
