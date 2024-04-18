import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Circle } from 'react-leaflet';
import axios from 'axios';

const PopulationsLegales = () => {
   
    const [geoJSONData, setGeoJSONData] = useState([]);
    const [populationData, setPopulationData] = useState([]);

    // Pour afficher les données ADMIN EXPRESS COG - commune
    const IGN_WFS_ENDPOINT = 'https://wxs.ign.fr/administratif/geoportail/wfs';
    const INSEE_API_ENDPOINT = 'https://api.insee.fr/metadonnees/V1/geo/communes?date=2024-02-17&com=false';

    // Clé personnelle IGN
    const IGN_CLEF = process.env.REACT_APP_TOKEN_IGN;
    const INSEE_TOKEN = process.env.REACT_APP_TOKEN_INSEE;

    // Nombre d'entités à récupérer par page
    const featuresPerPage = 1000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalCount = 34945;
                const totalPages = Math.ceil(totalCount / featuresPerPage);

                // Récupérer les données de toutes les pages
                const allData = [];
                for (let page = 0; page < totalPages; page++) {
                    const startIndex = page * featuresPerPage;
                    const response = await axios.get(IGN_WFS_ENDPOINT, {
                        params: {
                            SERVICE: 'WFS',
                            VERSION: '2.0.0',
                            REQUEST: 'GetFeature',
                            TYPENAME: 'ADMINEXPRESS-COG-CARTO.LATEST:commune',
                            outputFormat: 'application/json',
                            startIndex,
                            count: featuresPerPage
                        },
                        headers: {
                            'Authorization' : IGN_CLEF,
                            'Accept': 'application/json'
                        },
                        timeout: 10000 // 10 secondes d'attentes
                    });

                    console.log('Réponse de l\'API IGN:', response.data)

                    const pageData = response.data.features;
                    allData.push(...pageData);
                }

                setGeoJSONData(allData);

                // Récupérer les populations légales INSEE pour chaque commune
                const populationData = {};
                for (let i = 0; i < allData.length; i++) {
                    const codeCommune = allData[i]?.properties?.insee;
                    if (codeCommune) {
                        const response = await axios.get(`${INSEE_API_ENDPOINT}`, {
                            headers: {
                                'Authorisation': `Bearer ${INSEE_TOKEN}`
                            }
                        });
                        const population = response.data?.Cellule?.find(cellule => cellule?.Mesure?.['@code'] === 'POPTOT')?.Valeur || 0;
                        populationData[codeCommune] = population;
                        console.log('populationData: ', populationData);
                    }
                }
                setPopulationData(populationData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données : ', error)
            }
        }
        fetchData();
    }, [])


    const getFeatureStyle = (feature) => {
        return {
            fillColor: 'green',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }
    }

    const onEachFeature = (feature, layer) => {
        // Ajouter une Popup avec le nom de l'EPCI au survol
        if (feature.properties && feature.properties.nom) {
            layer.bindPopup(feature.properties.nom);
        }
    }

    return (
        <MapContainer center={[45, -4]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='<p>&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors</p>'
            />
            {geoJSONData.length > 0 && geoJSONData.map((feature, index) => (
                <Circle
                    key={index}
                    center={[feature?.properties?.centroid?.coordinates[1], feature?.properties?.centroid?.coordinates[0]]}
                    radius={1000}
                    pathOptions={{ fillColor: 'blue', color: 'blue' }}
                />
            ))}
            {geoJSONData.length > 0 && 
                <GeoJSON 
                    data={{ type: 'FeatureCollection', features: geoJSONData }}
                    style={getFeatureStyle}
                    onEachFeature={onEachFeature} 
                />}
        </MapContainer>
    )
}

export default PopulationsLegales