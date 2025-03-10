import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);

  return (
    <div className="cart-page">
      {/* 🛒 Cart Icon Button on Top Right */}
      <button className="cart-button" onClick={() => navigate('/cart')}>🛒 Cart ({cart.length})</button>

      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <span>{item.name} - {item.price}</span>
                  <button className="remove-item" onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        )}
        <button className="back-button" onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    </div>
  );
};

export default Cart;
