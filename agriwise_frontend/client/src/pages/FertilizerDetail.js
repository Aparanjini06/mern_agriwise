import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FertilizerDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:7000/api/fertilizers/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) return <div className="p-6">Loading...</div>;

  return (
   <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl border border-green-200">
  <h1 className="text-3xl font-bold text-green-800 mb-4 flex items-center gap-2">
    <span className="text-4xl">{recipe.icon}</span> {recipe.name}
  </h1>

<div className="flex justify-center mb-4">
  <img
    src={recipe.imageUrl}
    alt={recipe.name}
    style={{ width: "100px", height: "100px" }}
    className="object-cover rounded border border-gray-300"
  />
</div>



  <div className="mb-6">
    <h2 className="text-xl font-semibold text-green-700 mb-2">🧂 Ingredients</h2>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-semibold text-green-700 mb-2">🧪 Steps</h2>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
      {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
    </ol>
  </div>

  {recipe.videoLink && (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-green-700 mb-2">📺 Video</h2>
      <div className="aspect-video">
        <iframe
          width="100%"
          height="315"
          src={recipe.videoLink}
          title="Fertilizer Video"
          className="rounded-lg w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}
</div>
  );
};

export default FertilizerDetail;
