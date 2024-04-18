import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, ScaleControl } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

const RegionMap = () => {
    // Pour afficher les données ADMIN EXPRESS COG - region
    const wfsEndpoint = 'https://wxs.ign.fr/administratif/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAME=ADMINEXPRESS-COG.LATEST:region&outputFormat=application/json';

    const [geoJSONData, setGeoJSONData] = useState([]);

    // Clé personnelle IGN
    const CLEF = process.env.REACT_APP_TOKEN_IGN;

    // Nombre d'entités à récupérer par page
    const featuresPerPage = 1000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalCount = 18;
                const totalPages = Math.ceil(totalCount / featuresPerPage);

                // Récupérer les données de toutes les pages
                const allData = [];
                for (let page = 0; page < totalPages; page++) {
                    const startIndex = page * featuresPerPage;
                    const response = await axios.get(wfsEndpoint, {
                        params: {
                            SERVICE: 'WFS',
                            VERSION: '2.0.0',
                            REQUEST: 'GetFeature',
                            TYPENAME: 'ADMINEXPRESS-COG.LATEST:region',
                            outputFormat: 'application/json',
                            startIndex,
                            count: featuresPerPage
                        },
                        headers: {
                            'Authorization' : CLEF,
                            'Accept': 'application/json'
                        },
                        timeout: 50000 // 50 secondes d'attente
                    });

                    console.log('Réponse de l\'API IGN:', response.data)

                    const pageData = response.data.features;
                    allData.push(...pageData);
                }

                setGeoJSONData(allData);
                initCompass();
            } catch (error) {
                console.error('Erreur lors de la récupération des données', error)
            }
        }
        fetchData();
    }, [wfsEndpoint, CLEF])

    const getFeatureStyle = (feature) => {
        return {
            fillColor: 'red',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }
    }

    const onEachFeature = (feature, layer) => {
        // Ajouter une Popup avec le nom de la Région au survol
        if (feature.properties && feature.properties.nom) {
            const popupContent = document.createElement('div');
            popupContent.innerHTML = `<div><b>Nom : </b><span> ${feature.properties.nom}</span></div>`;
            layer.bindPopup(popupContent);
        }
    }

    const initCompass = () => {
        const compass = L.control.compass({ autoActive: true })
    }

    return (
        <div>
            <h1>Limites administratives des régions</h1>
            <MapContainer center={[45, -4]} zoom={5} style={{ height: '600px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
                />
                {geoJSONData.length > 0 && 
                    <GeoJSON 
                        data={{ type: 'FeatureCollection', features: geoJSONData }} 
                        style={getFeatureStyle}
                        onEachFeature={onEachFeature}
                />}
                <ScaleControl position="bottomleft"></ScaleControl>
            </MapContainer>
        </div>
        
    )
}

export default RegionMap