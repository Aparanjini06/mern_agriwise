import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
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
