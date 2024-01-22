import logo from './logo.svg';
import './App.css';
import MapOSM from './maps/MapOSM';
import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
     <MapOSM/>
     <FooterSection/>
    </div>
  );
}

export default App;
