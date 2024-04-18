import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';

const DensitePopulation = () => {
    // Pour afficher les données densité de population
    const wmsEndpoint = 'https://wxs.ign.fr/economie/geoportail/v/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=INSEE.FILOSOFI.POPULATION';

    // Clé personnelle IGN
    const CLEF = process.env.REACT_APP_TOKEN_IGN;

    const bounds = [[41, -6], [51, 10]]; 

    const getWMSParamsWithApiKey = () => {
       const params = {
        layers: 'INSEE.FILOSOFI.POPULATION',
        format: 'image/png',
        width: 256,
        height: 256,
        crs: 'EPSG:4326',
        transparent: true
       };

       // Ajout de la clé API à l'en-tête Authorization
       const headers = {
            Authorization: `Bearer ${CLEF}`,
            credentials: 'include'
       }

       return { ...params, headers};
    }

    return (
        <MapContainer center={[45, -4]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
            />
            <WMSTileLayer
                {...getWMSParamsWithApiKey} 
                url={wmsEndpoint}
                bounds={bounds}
                attribution='&copy; IGN'
            />
        </MapContainer>
    )
}

export default DensitePopulation