import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

const ContourIris = () => {
    // Pour afficher les données STATISTICALUNITS.IRIS:contours_iris
    const wfsEndpoint = 'https://wxs.ign.fr/cartovecto/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAME=STATISTICALUNITS.IRIS:contours_iris&outputFormat=application/json';

    const [geoJSONData, setGeoJSONData] = useState([]);

    // Clé personnelle IGN
    const CLEF = process.env.REACT_APP_TOKEN_IGN;

    // Nombre d'entités à récupérer par page
    const featuresPerPage = 1000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalCount = 49424;
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
                            TYPENAME: 'STATISTICALUNITS.IRIS:contours_iris',
                            outputFormat: 'application/json',
                            startIndex,
                            count: featuresPerPage
                        },
                        headers: {
                            'Authorization' : CLEF,
                            'Accept': 'application/json'
                        }
                    });

                    console.log('Réponse de l\'API IGN:', response.data)

                    const pageData = response.data.features;
                    allData.push(...pageData);
                }

                setGeoJSONData(allData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données', error)
            }
        }
        fetchData();
    }, [wfsEndpoint, CLEF])

    const getFeatureStyle = (feature) => {
        return {
            fillColor: 'blue',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }
    }

    const onEachFeature = (feature, layer) => {
        // Ajouter une Popup avec le nom de l'IRIS au survol
        if (feature.properties && feature.properties.nom_iris) {
            layer.bindPopup(feature.properties.nom_iris);
        }
    }

    return (
        <MapContainer center={[45, -4]} zoom={5} style={{ height: '100vh', width: '100%' }}>
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
        </MapContainer>
    )
}

export default ContourIris