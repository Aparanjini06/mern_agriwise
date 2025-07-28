import React, { useState } from 'react';
import axios from '../axiosConfig';
import './Register.css'; // optional for styling
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    role: 'farmer',       // default or from dropdown
    location: '',
    language: 'English'   // default or from dropdown
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/register', formData);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      if (err.response?.status === 409) {
        alert('Phone number already registered.');
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="👤 Name" onChange={handleChange} required />
        <input name="phone" placeholder="📱 Phone" onChange={handleChange} required />
        <input name="password" type="password" placeholder="🔒 Password" onChange={handleChange} required />
        <input name="location" placeholder="📍 Location" onChange={handleChange} required />
        
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
  );
}

export default Register;
