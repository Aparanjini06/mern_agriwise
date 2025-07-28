const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const Crop = require('../models/CropModel');

// Storage setup for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// POST /api/admin/add-crop
router.post('/add-crop', upload.single('image'), async (req, res) => {
  try {
    const {
      name = '',
      description = '',
      suitableRegions = '',
      suitableSoils = '',
      suitableMonths = '',
      sowingPeriod,
      harvestingPeriod,
    } = req.body;

    const imageUrl = `http://localhost:7000/images/${req.file.filename}`;

    const newCrop = new Crop({
      name: name.trim(),
      description: description.trim(),
      suitableRegions: suitableRegions
        ? suitableRegions.split(',').map(item => item.trim())
        : [],
      suitableSoils: suitableSoils
        ? suitableSoils.split(',').map(item => item.trim())
        : [],
      suitableMonths: suitableMonths
        ? suitableMonths.split(',').map(item => item.trim())
        : [],
      sowingPeriod,
      harvestingPeriod,
      image: imageUrl,
    });

    await newCrop.save();
    res.json({ message: 'Crop added successfully' });
  } catch (error) {
    console.error('❌ Error adding crop:', error);
    res.status(500).json({ message: 'Failed to add crop' });
  }
});

module.exports = router;
