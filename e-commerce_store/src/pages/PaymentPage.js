import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function PaymentPage({ setCart }) {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    setCart([]); 
    navigate("/catalogue");
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      <form className="form" onSubmit={handlePayment}>
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
