// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7000', // your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
  