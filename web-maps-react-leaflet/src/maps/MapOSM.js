import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapOSM = () => {

    const position = [51.505, -0.09]

    // const mapStyle = {
        //height: '600px', // 100% de la haiteur de la fenêtre visible
        //width: '100%' // 100% de la largeur de son conteneur parent
    //}

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
    )
}

export default MapOSM