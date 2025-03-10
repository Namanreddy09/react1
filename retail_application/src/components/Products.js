import React, { useState } from 'react';
import '../App.css';
import smartwatch from '../assets/smartwatch.jpg';
import headphones from '../assets/headphones.jpg';
import sunglasses from '../assets/sunglasses.jpg';


const productsData = [
  { id: 1, name: 'Smart Watch', price: '$199', image: smartwatch },
  { id: 2, name: 'Wireless Headphones', price: '$99', image: headphones },
  { id: 3, name: 'Sunglasses', price: '$49', image: sunglasses },
];


const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;