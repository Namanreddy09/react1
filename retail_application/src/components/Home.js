import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="form-container">
      <h2>Welcome to Our Store</h2>
      <nav className="nav-buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/products"><button>View Products</button></Link>
      </nav>
    </div>
  );
};

export default Home;