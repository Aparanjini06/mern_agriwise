const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subcategory: String,
  price: Number,
  image: String,
  stock: Number
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel; // ✅ Export correctly
