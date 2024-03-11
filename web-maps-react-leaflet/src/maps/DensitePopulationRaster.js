import React from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';

const DensitePopulationRaster = () => {
    // Pour afficher les données densité de population
    const wmsEndpoint = 'https://wxs.ign.fr/economie/geoportail/v/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=INSEE.FILOSOFI.POPULATION';

    // Clé personnelle IGN
    const CLEF = process.env.REACT_APP_TOKEN_IGN;

    const bounds = [[41, -6], [51, 10]]; 

    const getImageUrlWithApiKey = () => {
        const apiKeyParam = `&key=${CLEF}`;
        return `${wmsEndpoint}&FORMAT=image/png&WIDTH=256&HEIGHT=256${apiKeyParam}`;
    }

    return (
        <MapContainer center={[45, -4]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
            />
            <ImageOverlay 
                url={getImageUrlWithApiKey()}
                bounds={bounds}
                zIndex={1}
            />
        </MapContainer>
    )
}

export default DensitePopulationRaster