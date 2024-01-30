// App.js
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
import MapReunion from './maps/MapReunion';
import MapMayotte from './maps/MapMayotte';
import PluReunion from './maps/PluReunion';
// import AdminReunion from './maps/AdminReunion';
import CodesPostaux from './maps/CodesPostaux';
import CommuneMap from './maps/CommuneMap';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import MenuSection from './components/MenuSection';
import MenuIgn from './components/MenuIgn';

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
          <Route path="/mayotte" element={<MapMayotte/>}></Route>
          <Route path="/codes" element={<CodesPostaux/>}></Route>
          {/* <Route path="/administration" element={<AdminReunion/>}></Route> */}
          <Route path="/plu" element={<PluReunion/>}></Route>
          <Route path="/commune" element={<CommuneMap/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
        <FooterSection/> 
      </div>
    </Router>
   
  );
}

export default App;
