import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProfileOpen(false); // Close profile if menu is toggled
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setMenuOpen(false); // Close menu if profile is toggled
  };

  return (
    <nav className="navbar">
      {/* Left: Menu */}
      <div className="menu flex items-center gap-3">
  <button onClick={toggleMenu} className="icon-button">
    <FaBars size={24} />
  </button>

  <Link to="/" className="home-link">🏠 Home</Link>

  
</div>

      
      {/* Center: Brand */}
      <div className="nav-brand">AgriWise</div>

      {/* Right: Profile */}
      <div className="profile">
        <button onClick={toggleProfile} className="icon-button">
          <FaUserCircle size={28} />
        </button>
        {profileOpen && (
          <div className="dropdown dropdown-right">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
             
              <li><Link to="/admin/add-crop">Admin Panel</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
