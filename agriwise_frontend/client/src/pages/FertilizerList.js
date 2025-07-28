import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FertilizerCard from '../components/FertilizerCard';

const FertilizerList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://mern-agriwise.onrender.com/api/fertilizers')
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-6">🌿 DIY Natural Fertilizer Recipes</h1>
      <div className="flex flex-wrap">
        {recipes.map(recipe => (
          <FertilizerCard key={recipe._id} fertilizer={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FertilizerList;
