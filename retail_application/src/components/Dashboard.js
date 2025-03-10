import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import smartwatch from '../assets/smartwatch.jpg';
import headphones from '../assets/headphones.jpg';
import sunglasses from '../assets/sunglasses.jpg';

const productsData = [
  { id: 1, name: 'Smart Watch', price: 199, image: smartwatch },
  { id: 2, name: 'Wireless Headphones', price: 99, image: headphones },
  { id: 3, name: 'Sunglasses', price: 49, image: sunglasses },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ Calculate Total Cart Value
  const totalCartValue = cart.reduce((total, item) => total + item.price, 0);

  // ✅ Checkout Handler
  const handleCheckout = () => {
    alert(`Checkout Successful! Total Amount: $${totalCartValue}`);
    setCart([]); // Clear cart after checkout
  };

  // ✅ Logout Handler
  const handleLogout = () => {
    alert("Logging out...");
    navigate('/'); // Redirect to Home.js
  };

  return (
    <div className="dashboard-container">
      <h2>Accessories Dashboard</h2>

      {/* 🛍️ Product Listing */}
      <div className="dashboard-grid">
        {productsData.map((product) => (
          <div key={product.id} className="dashboard-card">
            <img src={product.image} alt={product.name} className="dashboard-product-image" />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* 🛒 Cart Section */}
      <div className="cart-section">
        <h3>🛒 Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
            <h4>Total: ${totalCartValue}</h4>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>

      {/* 🚪 Logout Button */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
