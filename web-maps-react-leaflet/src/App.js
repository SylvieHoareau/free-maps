// App.js
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import MenuSection from './components/MenuSection';
import MenuIgn from './components/MenuIgn';
// Pages statiques
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
// Cartes
// Administration
import MapReunion from './maps/MapReunion';
import RegionMap from './maps/RegionMap';
import EpciMap from './maps/EpciMap';
import CommuneMap from './maps/CommuneMap';

import ContourIris from './maps/ContourIris';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSection/>
        <MenuSection/>
        <MenuIgn/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/reunion" element={<MapReunion/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          {/* Administration */}
          <Route path="/region" element={<RegionMap/>}></Route>
          <Route path="/epci" element={<EpciMap/>}></Route>
          <Route path="/commune" element={<CommuneMap/>}></Route>
          <Route path="/iris" element={<ContourIris/>}></Route>
          {/* Agriculture */}
          {/* Altimétrie */}
          {/* Calcul */}
          {/* Cartes */}
          {/* Cartovecto */}
          {/* CLC */}
          {/* Découverte */}
          {/* Economie */}
          {/* ENR */}
          {/* Environnement */}
          {/* Essentiels */}
          {/* Géodésie */}
          {/* INSPIRE */}
          {/* Parcellaire */}
          {/* Satellite */}
          {/* Eta-Major */}
          {/* Topographie */}
          {/* Transports */}
        </Routes>
        <FooterSection/> 
      </div>
    </Router>
   
  );
}

export default App;
