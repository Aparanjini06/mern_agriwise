const mongoose = require('mongoose');
const Crop = require('./models/CropModel');

mongoose.connect('mongodb+srv://aparanjinipallela1:appu0610@cluster0.curryg2.mongodb.net/agrisphere');

const crops = [
  {
    name: "Rice",
    image: "http://localhost:7000/images/rice.webp",
    description: "Ideal for humid regions with loamy soil.",
    suitableRegions: ["Andhra Pradesh", "West Bengal", "Tamil Nadu"],
    suitableSoils: ["Loamy", "Clayey"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "October - November"
  },
  {
    name: "Wheat",
    image: "http://localhost:7000/images/wheat.webp",
    description: "Thrives in cool weather with well-drained soil.",
    suitableRegions: ["Punjab", "Haryana", "Uttar Pradesh"],
    suitableSoils: ["Loamy", "Sandy"],
    suitableMonths: ["November", "December"],
    sowingPeriod: "November - December",
    harvestingPeriod: "March - April"
  },
  {
    name: "Maize",
    image: "http://localhost:7000/images/maize.webp",
    description: "Requires moderate rainfall and sunlight.",
    suitableRegions: ["Karnataka", "Madhya Pradesh", "Bihar"],
    suitableSoils: ["Well-drained", "Loamy"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "September - October"
  },
  {
    name: "Sugarcane",
    image: "http://localhost:7000/images/sugarcane.webp",
    description: "Requires hot, humid climate and fertile soil.",
    suitableRegions: ["Uttar Pradesh", "Maharashtra", "Tamil Nadu"],
    suitableSoils: ["Loamy", "Clayey"],
    suitableMonths: ["February", "March"],
    sowingPeriod: "February - March",
    harvestingPeriod: "December - January"
  },
  {
    name: "Cotton",
    image: "http://localhost:7000/images/cotton.webp",
    description: "Needs dry climate and black soil.",
    suitableRegions: ["Maharashtra", "Gujarat", "Telangana"],
    suitableSoils: ["Black", "Sandy Loam"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "October - January"
  },
  {
    name: "Millet (Bajra)",
    image: "http://localhost:7000/images/bajra.webp",
    description: "Drought-tolerant crop for arid regions.",
    suitableRegions: ["Rajasthan", "Haryana", "Gujarat"],
    suitableSoils: ["Sandy", "Loamy"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "September - October"
  },
  {
    name: "Groundnut",
    image: "http://localhost:7000/images/groundnut.webp",
    description: "Needs well-drained sandy loam soil.",
    suitableRegions: ["Gujarat", "Andhra Pradesh", "Tamil Nadu"],
    suitableSoils: ["Sandy Loam"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "October - November"
  },
  {
    name: "Soybean",
    image: "http://localhost:7000/images/soybean.webp",
    description: "Best in warm climate with moderate rainfall.",
    suitableRegions: ["Madhya Pradesh", "Maharashtra", "Rajasthan"],
    suitableSoils: ["Black", "Loamy"],
    suitableMonths: ["June", "July"],
    sowingPeriod: "June - July",
    harvestingPeriod: "September - October"
  },
  {
    name: "Barley",
    image: "http://localhost:7000/images/barley.webp",
    description: "Winter cereal crop ideal for semi-arid areas.",
    suitableRegions: ["Punjab", "Haryana", "Uttar Pradesh"],
    suitableSoils: ["Loamy", "Sandy"],
    suitableMonths: ["October", "November"],
    sowingPeriod: "October - November",
    harvestingPeriod: "March - April"
  },
  {
    name: "Mustard",
    image: "http://localhost:7000/images/mustard.webp",
    description: "Needs cool climate and loamy soil.",
    suitableRegions: ["Rajasthan", "Haryana", "Madhya Pradesh"],
    suitableSoils: ["Loamy", "Sandy"],
    suitableMonths: ["October", "November"],
    sowingPeriod: "October - November",
    harvestingPeriod: "February - March"
  }
];

Crop.insertMany(crops)
  .then(() => {
    console.log("✅ Crops inserted successfully.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error inserting crops:", err);
    mongoose.disconnect();
  });
