import React, { useState } from 'react';
import axios from 'axios';
import './AddOrganicGuide.css';

const AddOrganicGuide = () => {
  const [form, setForm] = useState({
    cropName: '',
    soilPreparation: '',
    sowing: '',
    naturalFertilizers: '',
    pestControl: '',
    harvestTips: '',
    videoLink: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      await axios.post('http://localhost:7000/api/organic/add', formData);
      alert('Crop Guide Added with Image!');
      setForm({
        cropName: '',
        soilPreparation: '',
        sowing: '',
        naturalFertilizers: '',
        pestControl: '',
        harvestTips: '',
        videoLink: ''
      });
      setImageFile(null);
    } catch (err) {
      alert('Failed to add guide');
      console.error(err);
    }
  };

  return (<div className="add-guide-container max-w-3xl mx-auto">
  <h2 className="add-guide-title">🌱 Add Organic Crop Guide</h2>
  <form onSubmit={handleSubmit} className="grid gap-4" encType="multipart/form-data">
    {[
      { name: 'cropName', label: 'Crop Name' },
      { name: 'soilPreparation', label: 'Soil Preparation' },
      { name: 'sowing', label: 'Sowing' },
      { name: 'naturalFertilizers', label: 'Natural Fertilizers' },
      { name: 'pestControl', label: 'Pest Control' },
      { name: 'harvestTips', label: 'Harvest Tips' },
      { name: 'videoLink', label: 'YouTube Video Link' }
    ].map(({ name, label }) => (
      <div key={name} className="form-field">
        <label>{label}</label>
        <textarea
          name={name}
          value={form[name]}
          onChange={handleChange}
          rows={name === 'cropName' || name === 'videoLink' ? 1 : 3}
          required
        />
      </div>
    ))}

    <div className="form-field">
      <label>Crop Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} required />
    </div>

    <button type="submit" className="add-button">Add Crop Guide</button>
  </form>
</div>

  );
};

export default AddOrganicGuide;
