import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Make sure this is correct path
import "./OrganicShop.css";

const OrganicShop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const categories = [
    "Organic Seeds",
    "Live Organic Plants",
    "Organic Fertilizers",
    "Natural Pesticides",
    "DIY Farming Kits",
    "Organic Household Items",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛒 Organic Shopping</h1>

      <div className="category-buttons">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default OrganicShop;
