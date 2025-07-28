const express = require('express');
const router = express.Router();
const Crop = require('../models/CropModel');

// POST /api/planner
router.post('/planner', async (req, res) => {
  try {
    const { location, soilType, month } = req.body;

    const crops = await Crop.find({
      suitableRegions: location,
      suitableSoils: soilType,
      suitableMonths: month,
    });

    res.json({ crops });
  } catch (error) {
    console.error('Planner Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
