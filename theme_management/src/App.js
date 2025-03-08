import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css"; // Import CSS

// Lazy load components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader message="Loading application..." />}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="content">
      <h1>Welcome to the {theme === "light" ? "Light Theme" : "Dark Theme"}!</h1>
      
      {/* Theme Toggle Button with Icons */}
      <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
        {theme === "light" ? "🌙 Dark Theme" : "☀️ Light Theme"}
      </button>

      <Suspense fallback={<Loader message="Loading About section..." />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loader message="Loading Contact section..." />}>
        <Contact />
      </Suspense>
    </div>
  );
};

// Loader Component for Suspense fallback
const Loader = ({ message }) => (
  <div className="loader">
    <span className="spinner"></span>
    <p>{message}</p>
  </div>
);

export default App;
