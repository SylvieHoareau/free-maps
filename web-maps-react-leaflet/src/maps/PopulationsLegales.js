import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Circle, Popup } from 'react-leaflet';
import axios from 'axios';

const PopulationsLegales = ({ geoJSONData }) => {

    const mapContainer = useRef(null);
    const [fetchedGeoJSONData, setFetchedGeoJSONData] = useState([]);
    const [inseeData, setInseeData] = useState([]);

    // Affichage des données IGN (découpage par communes)

    // Pour afficher les données ADMIN EXPRESS COG - commune
    const wfsEndpoint = 'https://wxs.ign.fr/administratif/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=ADMINEXPRESS-COG.LATEST:commune';

    useEffect(() => {
        const fetchGeoJSONData = async () => {
            try {
                    const response = await axios.get(wfsEndpoint, {
                        params: {
                            SERVICE: 'WFS',
                            VERSION: '2.0.0',
                            REQUEST: 'GetFeature',
                            TYPENAME: 'ADMINEXPRESS-COG-CARTO.LATEST:commune',
                            outputFormat: 'application/json',
                            // startIndex,
                            // count: featuresPerPage
                        },
                        headers: {
                            'Authorization' : process.env.REACT_APP_TOKEN_IGN,
                            'Accept': 'application/json'
                        }
                    });

                    console.log('Réponse de l\'API IGN:', response.data)
                    setFetchedGeoJSONData(response.data.features);
            } catch (error) {
                console.error('Erreur lors de la récupération des données', error)
            }
        }
        fetchGeoJSONData();
        
    }, []);

    // Récupération des statistiques INSEE

    useEffect(() => {
        const fetchInseeData = async () => {
            try {
                const codeCommune = await getCommunes(); 
                const response = await axios.get(`https://api.insee.fr/donnees-locales/V0.1/donnees/geo-IND_POPLEGALES@POPLEG2020/COM-${codeCommune}.1`, {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_TOKEN_INSEE}`,
                        'Accept': 'application/json'
                    }
                })
                // Récupérer les données le population totale
                // const poptotData = response.data.Cellule.filter(cell => cell.Mesure['code'] === 'POPTOT');
                setInseeData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données INSEE : ', error);
            }
        }
        fetchInseeData();
    }, []);

     // Métadonnées | Communes

     const getCommunes = async () => {
        try {
            const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/communes?date=2024-02-17&com=false', {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_TOKEN_INSEE}`,
                    'Accept': 'application/json'
                }
            })
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des métadonnées INSEE : ${error.message}`);
        }
    }

    // Récupère la liste des codes communes depuis les métadonnées de l'INSEE
    const getPopulationForCommune = async (codeCommune) => {

        // Récupérer la liste des communes
        // const communes = await getCommunes();
        // console.log("Liste des communes : ", communes);

        // Rechercher le code de commune dans la liste des communes
        const commune = inseeData.find(commune => commune.code === codeCommune);
        console.log("Commune : ", commune);
        return commune ? commune.population : null;
        
        // Rechercher l'entrée correspondant au code de la commune
        // const communeData = inseeData.find(cell => cell.Zone['@codegeo'] === codeCommune);

        // Vérifier si les données de population pour la commune sotn disponible
        // if (commune) {
        //     // Extraire la valeur de la population totale
        //     return commune.code;
        // } else {
        //     // Si les données ne sont pas disponibles, renvoyer null ou une valeur par défaut
        //     return null;
        // }
    }


    // Légendes
    const getColor = (population) => {

        // Définir les seuils de populations et les couleurs correctes
        const thresholds = [
            { threshold: 100000, color: '#ffffcc'},
            { threshold: 50000, color: '#c2e699'},
            { threshold: 10000, color: '#78c679'},
            { threshold: 1000, color: '#31a354'},
            { threshold: 100, color: '#006837'},
            { threshold: 1, color: '#004529'}
        ];

        // Parcourir les seuils et retourner la couleur
        for (const thresoldData of thresholds) {
            if (population >= thresoldData.threshold) {
                return thresoldData.color;
            }
        }

        // Par défaut, retourner une couleur
        return '#000000';
    }

    return (
        <MapContainer
            ref={mapContainer}
            center={[45, -4]} 
            zoom={5}
            style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='<p>&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors</p>'
            />

            {/* Affiche les données IGN  */}
            {fetchedGeoJSONData.length > 0 && 
                <GeoJSON data={{ type: 'FeatureCollection', features: geoJSONData }} />}

            {fetchedGeoJSONData.length > 0 && (
                fetchedGeoJSONData.map(feature => (
                    <Circle
                        key={feature.properties.code_commune}
                        center={[feature.properties.center.coordinates[1], feature.properties.center.coordinates[0]]}
                        radius={Math.sqrt(getPopulationForCommune(feature.properties.code_commune) || 0)* 50}
                        pathOptions={{ fillColor: getColor(getPopulationForCommune(feature.properties.code_commune)), color: 'white', weight: 1}}

                    >
                        <Popup>Population : {getPopulationForCommune(feature.properties.code_commune)}</Popup>
                    </Circle>
                ))
            )

            }
            {/* Ajoute la couche de données INSEE */}
            {/* { inseeData.length > 0 && (
                <GeoJSON
                    data={geoJSONData}
                    style={(feature) => ({
                        fillColor: getColor(getPopulationForCommune(feature.properties.code_commune)),
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.8
                    })}
                    onEachFeature={(feature, layer) => {
                        layer.bindPopup(`Population : ${getPopulationForCommune(feature.properties.code_commune)}`)
                    }}
                />
            )} */}
        </MapContainer>
    )
}

export default PopulationsLegales