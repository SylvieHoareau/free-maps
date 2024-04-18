// App.js
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import MenuInsee from './components/MenuInsee';
import MenuIgn from './components/MenuIgn';
import MenuSection from './components/MenuSection';
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
import PopulationsLegales from './maps/PopulationsLegales';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSection/>
        <MenuInsee/>
        <MenuIgn/>
        <MenuSection />
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
          {/* Statistiques INSEE*/}
          <Route path="/populationslegales" element={<PopulationsLegales/>}></Route>
        </Routes>
        <FooterSection/> 
      </div>
    </Router>
   
  );
}

export default App;
