import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Choropleth } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

const PopulationsLegales = ({ inseeData, geoJSONData }) => {

    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    // Affichage des données IGN (découpage par communes)

     // Pour afficher les données ADMIN EXPRESS COG - commune
     const wfsEndpoint = 'https://wxs.ign.fr/administratif/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=ADMINEXPRESS-COG.LATEST:commune';

     const [fetchedGeoJSONData, setFetchedGeoJSONData] = useState([]);
 
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
                         }
                     });
 
                     console.log('Réponse de l\'API IGN:', response.data)
 
                     const pageData = response.data.features;
                     allData.push(...pageData);
                 }
 
                 setFetchedGeoJSONData(allData);
             } catch (error) {
                 console.error('Erreur lors de la récupération des données', error)
             }
         }
        fetchData();

        
    }, [wfsEndpoint, CLEF])

    // Statistiques INSEE

    const [data, setData] = useState([]);

    const getPopLegales = async () => {
        try {
            const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-IND_POPLEGALES@POPLEG2020/COM-97411.1', {
                headers: {
                    'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                    'Accept': 'application/json'
                }
            })
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching INSEE data : ${error.message}`);
        }
    }

    // Carte choroplète

    useEffect(() => {
        if (mapContainer.current) {
            // Créer la carte
            const theMap = mapContainer.current.leafletElement;
            setMap(theMap);

            // Ajouter la carte choroplète Leaflet
            L.choropleth(geoJSONData, {
                valueProperty: 'population_totale',
                scale: ['#f00', '#0f0'],
                steps: 10,
                style: {
                    color: '#fff',
                    weight: 1, 
                    fillOpacity: 0.8 // Couleur de la couche
                },
                onEachFeature: (feature, layer) => {
                    // popus and tooltips
                    layer.bindTooltip(`Population: ${feature.properties.population_totale}`);
                }
                
            }).addTo(theMap);
        }
    }, [mapContainer, geoJSONData]);

    return (
        <MapContainer
            ref={mapContainer}
            center={[-14.2350, 51.9253]} 
            zoom={5}
            style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='<p>&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors</p>'
            />

            {/* Affiche les données IGN  */}
            {fetchedGeoJSONData.length > 0 && <GeoJSON data={{ type: 'FeatureCollection', features: geoJSONData }} />}

            {/* Ajoute la couche de données INSEE */}
            { inseeData && (
                <Choropleth
                    data={inseeData} // inseeData pour visualisation de la carte choroplète
                    geojson={geoJSONData}
                    valuePorperty="population_totale"
                    fillColor="0000FF"
                />
            )}
        </MapContainer>
    )
}

export default PopulationsLegales