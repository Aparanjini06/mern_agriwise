const express = require('express');
const ProductModel = require('../models/ProductModel'); // ✅ Import correctly

const router = express.Router();

// Add a product
router.post('/', async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body); // ✅ Now this works
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
