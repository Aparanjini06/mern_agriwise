// src/components/ModulesPreview.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModulesPreview.css';

const modules = [
  { title: 'Crop Planner', path: '/planner' },
  { title: 'Organic Guide', path: '/guide' },
  { title: 'Fertilizers', path: '/fertilizers' },
  { title: 'Shop Now', path: '/organic-shop' },   // default category (Seeds)
               // cart path
];

function ModulesPreview() {
  const navigate = useNavigate();

  return (
    <section className="modules-preview">
      <h2>Explore Our Features</h2>
      <div className="modules-grid">
        {modules.map((mod, index) => (
          <div className="module-card" key={index} onClick={() => navigate(mod.path)}>
            <h3>{mod.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModulesPreview;
