const OrganicGuide = require('../models/OrganicGuideModel');

exports.addOrganicGuide = async (req, res) => {
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

    const image = req.file ? req.file.path : '';

    const guide = new OrganicGuide({
      cropName,
      soilPreparation,
      sowing,
      naturalFertilizers,
      pestControl,
      harvestTips,
      videoLink,
      image
    });

    await guide.save();

    res.status(201).json({ message: 'Organic Guide added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add organic guide' });
  }
};
