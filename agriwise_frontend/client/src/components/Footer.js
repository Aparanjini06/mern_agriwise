// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>📍 Contact: agriwise@gmail.com</p>
        <p>ℹ️ About Us</p>
      </div>
      <div className="language-switcher">
        🌐 Language: 
        <select>
          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
