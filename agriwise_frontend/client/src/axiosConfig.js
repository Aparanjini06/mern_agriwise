// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mern-agriwise.onrender.com', // your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
  