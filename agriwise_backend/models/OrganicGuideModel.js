// models/OrganicGuideModel.js
const mongoose = require('mongoose');

const organicGuideSchema = new mongoose.Schema({
  cropName: String,
  image: String,
  soilPreparation: String,
  sowing: String,
  naturalFertilizers: String,
  pestControl: String,
  harvestTips: String,
  videoLink: String
});

module.exports = mongoose.model('OrganicGuide', organicGuideSchema);
