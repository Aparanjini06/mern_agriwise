import React from 'react';
import { useNavigate } from 'react-router-dom';

const FertilizerCard = ({ fertilizer }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-white rounded-2xl shadow-md p-4 w-72 m-4 hover:shadow-xl transition"
      onClick={() => navigate(`/fertilizers/${fertilizer._id}`)}
    >
      <div className="text-4xl">{fertilizer.icon}</div>
      <h3 className="text-lg font-bold text-green-700 mt-2">{fertilizer.name}</h3>

      <div className="flex justify-center mt-2">
        <img
          src={fertilizer.imageUrl}
          alt={fertilizer.name}
          style={{ width: '60px', height: '45px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default FertilizerCard;
