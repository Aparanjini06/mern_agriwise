// models/FarmerModel.js

const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'admin'], default: 'farmer' },
  location: { type: String }  // e.g., 'en', 'hi', 'te'
});

const Farmer = mongoose.model('Farmer', farmerSchema);
module.exports = Farmer;
