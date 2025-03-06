import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function CartPage({ cart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">{item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/catalogue")} className="back-btn">Back to Catalogue</button>
      {cart.length > 0 && <button onClick={() => navigate("/payment")} className="checkout-btn">Proceed to Payment</button>}
    </div>
  );
}

export default CartPage;
