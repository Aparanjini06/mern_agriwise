// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CropPlanner from './pages/CropPlanner';
import AddCropForm from './pages/AddCropForm';
import OrganicGuide from './components/OrganicGuide';
import AddOrganicGuide from './pages/AddOrganicGuide';
import FertilizerList from './pages/FertilizerList';
import FertilizerDetail from './pages/FertilizerDetail';
//import ProductList from './pages/ProductList';
import OrganicShop from './pages/OrganicShop';
// 🛍️ category selector + products
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Logout from './components/Logout';


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planner" element={<CropPlanner />} />
        <Route path="/guide" element={< OrganicGuide/>} />
        <Route path="/admin/add-crop" element={<AddCropForm />} />
        <Route path="/add-organic-guide" element={<AddOrganicGuide />} />
        <Route path="/fertilizers" element={<FertilizerList />} />
          <Route path="/fertilizers/:id" element={<FertilizerDetail />} />
          <Route path="/organic-shop" element={<OrganicShop />} />
          <Route path="/checkout" element={<Checkout />} />
  <Route path="/thank-you" element={<ThankYou />} />
 <Route path='/logout' element={<Logout/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
