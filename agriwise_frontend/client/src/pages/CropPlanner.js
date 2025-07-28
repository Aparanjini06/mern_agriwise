import React, { useState } from 'react';
import axios from 'axios';
import './CropPlanner.css'; // custom styles

const CropPlanner = () => {
  const [form, setForm] = useState({
    location: '',
    soilType: '',
    month: ''
  });

  const [crops, setCrops] = useState([]);

  const regions = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal '
];
  const soilTypes = ['Alluvial', 'Black', 'Red','Loamy' ,'Laterite', 'Mountain', 'Desert'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:7000/api/planner', form);
    setCrops(res.data.crops);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2 text-green-700">🌾 Crop Planner</h1>
<p className="crop-description">
  The Crop Planner helps farmers choose the most suitable crops to grow based on their location, soil type, and the current month. 
  Just select your region, soil, and month to receive personalized crop suggestions with sowing and harvesting timelines.
</p>
      <h2 className="text-xl font-semibold mb-4 text-green-700">🧪 Common Soil Types</h2>

<div className="soil-flex-gallery">
  {soilTypes.map((soil, idx) => (
    <div key={idx} className="soil-flex-item">
      <img 
        src={`/images/soil/${soil.toLowerCase()}.jpg`} 
        alt={soil} 
        className="soil-image" 
      />
      <p className="soil-label">{soil} Soil</p>
    </div>
  ))}
</div>




      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 crop-form">
        <select name="location" value={form.location} onChange={handleChange} className="crop-select">
          <option value="">Select Region</option>
          {regions.map((region, i) => (
            <option key={i} value={region}>{region}</option>
          ))}
        </select>

        <select name="soilType" value={form.soilType} onChange={handleChange} className="crop-select">
          <option value="">Select Soil Type</option>
          {soilTypes.map((soil, i) => (
            <option key={i} value={soil}>{soil}</option>
          ))}
        </select>

        <select name="month" value={form.month} onChange={handleChange} className="crop-select">
          <option value="">Select Month</option>
          {months.map((month, i) => (
            <option key={i} value={month}>{month}</option>
          ))}
        </select>

        <button type="submit" className="crop-button col-span-1 md:col-span-3">
          🌿 Get Crop Suggestions
        </button>
      </form>

      {crops.length > 0 && (
  <div className="crop-suggestions-container">
    <h2 className="text-2xl font-bold text-green-700 mb-6">🌱 Recommended Crops</h2>
    <div className="crop-suggestions-grid">
      {crops.map((crop, idx) => (
        <div key={idx} className="crop-card">
          <img src={crop.image} alt={crop.name} />
          <h2>{crop.name}</h2>
          <p>{crop.description}</p>
          <div className="text-sm text-green-700">
            <p><strong>Sowing:</strong> {crop.sowingPeriod}</p>
            <p><strong>Harvesting:</strong> {crop.harvestingPeriod}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


    </div>
  );
};

export default CropPlanner;
