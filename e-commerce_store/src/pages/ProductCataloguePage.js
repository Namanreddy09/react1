import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ProductCataloguePage({ cart, addToCart }) {
  const navigate = useNavigate();
  
  const products =[
    { id: 1, name: "Laptop", price: "$1000" },
    { id: 2, name: "Smartphone", price: "$500" },
    { id: 3, name: "Headphones", price: "$100" },
    { id: 4, name: "Tablet", price: "$300" },
    { id: 5, name: "Smartwatch", price: "$150" },
  ];

  return (
    <div className="catalogue-container">
      <div className="top-bar">
        <button className="logout-btn" onClick={() => navigate("/")}>Logout</button>
        <button className="cart-btn" onClick={() => navigate("/cart")}>Cart ({cart.length})</button>
      </div>
      <h2>Product Catalogue</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name} - {product.price}</span>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCataloguePage;
