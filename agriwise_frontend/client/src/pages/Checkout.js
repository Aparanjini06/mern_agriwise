import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css'; // Import the CSS file

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    navigate('/thank-you');
  };

  if (!product) return <p>No product selected for checkout.</p>;

  return (
    <div className="checkout-container">
      <h2 className="checkout-header">Checkout</h2>

      <div className="product-info">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p className="product-price">₹{product.price}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          required
        />
        <button
          type="submit"
          className="checkout-button"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
