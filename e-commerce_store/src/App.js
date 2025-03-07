import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductCataloguePage from "./pages/ProductCataloguePage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/catalogue" element={<ProductCataloguePage cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/payment" element={<PaymentPage setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
