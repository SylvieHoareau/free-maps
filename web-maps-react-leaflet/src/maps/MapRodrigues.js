import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../css/leaflet.css'
// import '../../node_modules/leaflet/dist/leaflet.css'; // Fichier CSS de Leaflet
// import '../../node_modules/react-leaflet/dist/react-leaflet.css'; // Fichier CSS de react-leaflet

const MapRodrigues = () => {

    // Coordonnées du lieu
    const position = [-19.724539, 63.427218]

   /*  const mapStyle = {
        height: '600px', // 100% de la hauteur de la fenêtre visible
        width: '100%' // 100% de la largeur de son conteneur parent
    } */

    return (
        <section className="map-component" id="maurice">
            <h1>Carte de Rodrigues avec Open Street Map</h1>
            <div className="map">
                <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ width: '500px', height: '500px' }} className="map-container">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
             </div>
        </section>
       
    )
}

export default MapRodrigues