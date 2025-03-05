import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductCataloguePage from './ProductCataloguePage';
import './studies.css'; // Import external CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/catalogue">Product Catalogue</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/catalogue" element={<ProductCataloguePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
