import React, { useState } from 'react';
import axios from 'axios';
import './AddCropForm.css';

const AddCropForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedRegions, setSelectedRegions] = useState('');
  const [selectedSoils, setSelectedSoils] = useState('');
  const [selectedMonths, setSelectedMonths] = useState('');
  const [sowingPeriod, setSowingPeriod] = useState('');
  const [harvestingPeriod, setHarvestingPeriod] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('description', description.trim());
    formData.append('suitableRegions', selectedRegions.trim()); // string
    formData.append('suitableSoils', selectedSoils.trim());     // string
    formData.append('suitableMonths', selectedMonths.trim());   // string

    formData.append('sowingPeriod', sowingPeriod.trim());
    formData.append('harvestingPeriod', harvestingPeriod.trim());
    if (imageFile) formData.append('image', imageFile);

    try {
      const res = await axios.post('/api/admin/add-crop', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('✅ Crop added successfully!');
      console.log(res.data);
    } catch (err) {
      console.error('❌ Error adding crop:', err);
      alert('Failed to add crop');
    }
  };

  return (
  <div className="crop-form-container">
    <h2>Add New Crop</h2>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Regions (comma separated)" value={selectedRegions} onChange={(e) => setSelectedRegions(e.target.value)} required />
      <input type="text" placeholder="Soil Types (comma separated)" value={selectedSoils} onChange={(e) => setSelectedSoils(e.target.value)} required />
      <input type="text" placeholder="Months (comma separated)" value={selectedMonths} onChange={(e) => setSelectedMonths(e.target.value)} required />
      <input type="text" placeholder="Sowing Period" value={sowingPeriod} onChange={(e) => setSowingPeriod(e.target.value)} required />
      <input type="text" placeholder="Harvesting Period" value={harvestingPeriod} onChange={(e) => setHarvestingPeriod(e.target.value)} required />
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} accept="image/*" />
      <button type="submit">Add Crop</button>
    </form>
  </div>
);

};

export default AddCropForm;
