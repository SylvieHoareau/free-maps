import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

const CommuneMap = () => {
    // Pour afficher les données ADMIN EXPRESS COG - commune
    const wfsEndpoint = 'https://wxs.ign.fr/administratif/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAME=ADMINEXPRESS-COG.LATEST:commune&outputFormat=application/json';

    const [geoJSONData, setGeoJSONData] = useState([]);

    // Clé personnelle IGN
    const CLEF = process.env.REACT_APP_TOKEN_IGN;

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
                    const response = await axios.get(wfsEndpoint, {
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
                            'Authorization' : CLEF,
                            'Accept': 'application/json'
                        },
                        timeout: 60000 // 1 minute d'attente
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

    return (
        <MapContainer center={[45, -4]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='<p>&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors</p>'
            />
            {geoJSONData.length > 0 && <GeoJSON data={{ type: 'FeatureCollection', features: geoJSONData }} />}
        </MapContainer>
    )
}

export default CommuneMap