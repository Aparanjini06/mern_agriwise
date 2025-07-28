import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

// Set your backend base URL dynamically
const BASE_URL = import.meta.env.VITE_API_URL || 'https://mern-agriwise.onrender.com';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="product-card">
      <img
        src={`${BASE_URL}/uploads/${product.image}`}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = '/fallback-image.jpg'; // Optional: fallback if image fails
        }}
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-subcategory">{product.subcategory}</p>
      <p className="product-price">₹{product.price}</p>
      <div className="card-buttons">
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
