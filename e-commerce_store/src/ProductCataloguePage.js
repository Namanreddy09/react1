import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
  { id: 4, name: 'Product 4', price: 99.99 },
];

function ProductCataloguePage() {
  return (
    <div className="product-catalogue-page">
      <h1>Product Catalogue</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCataloguePage;
