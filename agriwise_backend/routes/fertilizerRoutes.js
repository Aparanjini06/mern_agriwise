const express = require('express');
const router = express.Router();
const Fertilizer = require('../models/FertilizerModel');

// Add new fertilizer recipe
router.post('/add', async (req, res) => {
  try {
    const newFertilizer = new Fertilizer(req.body);
    await newFertilizer.save();
    res.json({ message: 'Fertilizer recipe added!', data: newFertilizer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const all = await Fertilizer.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Fertilizer.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

module.exports = router;
