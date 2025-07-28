const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  addOrganicGuide
} = require('../controllers/organicGuideController');

// Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/organic'); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST Route
router.post('/add-guide', upload.single('image'), addOrganicGuide);

module.exports = router;
