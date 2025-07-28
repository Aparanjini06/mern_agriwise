const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  suitableRegions: [String],
  suitableSoils: [String],
  suitableMonths: [String],
  sowingPeriod: String,
  harvestingPeriod: String,
});

module.exports = mongoose.model('Crop', cropSchema);
