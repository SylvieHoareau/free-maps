// App.js
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import MapReunion from './maps/MapReunion';
import MapMaurice from './maps/MapMaurice';
import MapMadagascar from './maps/MapMadagascar';
import MapRodrigues from './maps/MapRodrigues';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSection/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/reunion" element={<MapReunion/>}></Route>
          <Route path="/maurice" element={<MapMaurice/>}></Route>
          <Route path="/madagascar" element={<MapMadagascar/>}></Route>
          <Route path="/rodrigues" element={<MapRodrigues/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
        <FooterSection/> 
      </div>
    </Router>
   
  );
}

export default App;
