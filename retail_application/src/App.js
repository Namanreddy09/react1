// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/Login';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'; // ✅ Import Cart Page
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} /> {/* ✅ Added Cart Route */}
      </Routes>
    </Router>
  );
};

export default App;
