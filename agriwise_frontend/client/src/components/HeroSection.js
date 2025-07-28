// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-text">
          <h1>Empowering Farmers for a Better Future 🌾</h1>
          <p>Your smart farming companion — plan crops, predict yields, and grow together.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/planner')}>Start Planning</button>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
