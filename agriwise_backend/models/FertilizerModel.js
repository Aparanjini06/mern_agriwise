const mongoose = require('mongoose');

const fertilizerSchema = new mongoose.Schema({
  name: String,
  icon: String, // Emoji or URL
  ingredients: [String],
  steps: [String],
  videoLink: String,
  imageUrl: String,
});

module.exports = mongoose.model('Fertilizer', fertilizerSchema);
