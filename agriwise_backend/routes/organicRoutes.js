const express = require('express');
const router = express.Router();
const OrganicGuide = require('../models/OrganicGuideModel');

const upload = require('../middlewares/upload');


// GET all guides
router.get('/guides', async (req, res) => {
  try {
    const guides = await OrganicGuide.find();
    res.json({ guides });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST with image upload
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const {
      cropName,
      soilPreparation,
      sowing,
      naturalFertilizers,
      pestControl,
      harvestTips,
      videoLink
    } = req.body;

    const newGuide = new OrganicGuide({
      cropName,
      soilPreparation,
      sowing,
      naturalFertilizers,
      pestControl,
      harvestTips,
      videoLink,
      image: req.file ? `/uploads/${req.file.filename}` : ''
    });

    await newGuide.save();
    res.status(201).json({ message: 'Crop guide added with image!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add guide' });
  }
});


module.exports = router;
