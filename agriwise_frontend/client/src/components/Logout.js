import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage/sessionStorage tokens or user data
    localStorage.clear();

    // Optionally, show message for 1.5 seconds before redirecting
    const timer = setTimeout(() => {
      navigate('/');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2 className="logout-message">👋 Logging you out...</h2>
    </div>
  );
};

export default Logout;
