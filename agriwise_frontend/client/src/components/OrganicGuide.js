import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OrganicGuide.css';

const cropEmojis = {
  tomato: '🍅',
  chilli: '🌶️',
  rice: '🌾',
  wheat: '🌿',
  banana: '🍌',
  mango: '🥭',
  brinjal: '🍆',
  onion: '🧅',
  potato: '🥔',
  corn: '🌽',
};

const OrganicGuide = () => {
  const [guides, setGuides] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/add-organic-guide');
  };

  useEffect(() => {
    axios
      .get('https://mern-agriwise.onrender.com/api/organic/guides')
      .then((res) => setGuides(res.data.guides))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="organic-title drop-shadow-md mb-3">
          🌱 Organic Crop Guide
        </h1>
        <button onClick={handleAddClick} className="add-button">
          ➕ Add Crop Details
        </button>
      </div>

      {guides.length === 0 && (
        <p className="text-gray-500 text-center mt-10">No organic guides available yet.</p>
      )}

      <div className="space-y-6">
        {guides.map((guide, index) => {
          const isOpen = selected === index;
          const emoji = cropEmojis[guide.cropName.toLowerCase()] || '🌿';

          return (
            <div key={index} className="organic-container">
              <button
                onClick={() => setSelected(isOpen ? null : index)}
                className={`crop-toggle-btn ${isOpen ? 'active' : ''}`}
              >
                <h2 className="text-xl font-bold capitalize">
                  {emoji} {guide.cropName}
                </h2>
                <span>{isOpen ? '▲' : '▼'}</span>
              </button>

              <div
                className={`accordion-content ${isOpen ? 'accordion-open' : ''}`}
              >
                <div className="crop-detail-section">
                  <img
                    src={guide.image}
                    alt={guide.cropName}
                    className="organic-image"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoBlock title="🌿 Soil Preparation" content={guide.soilPreparation} />
                    <InfoBlock title="🌱 Sowing" content={guide.sowing} />
                    <InfoBlock title="🍀 Natural Fertilizers" content={guide.naturalFertilizers} />
                    <InfoBlock title="🐛 Pest Control" content={guide.pestControl} />
                    <InfoBlock title="🌾 Harvest Tips" content={guide.harvestTips} />
                    {guide.videoLink && (
                      <div>
                        <h3 className="info-title">🎥 Tutorial Video</h3>
                        <a
                          href={guide.videoLink}
                          className="video-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch on YouTube
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const InfoBlock = ({ title, content }) => (
  <div>
    <h3 className="info-title">{title}</h3>
    <p className="info-content">{content}</p>
  </div>
);

export default OrganicGuide;
