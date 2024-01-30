import React, { useEffect } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as Gp from 'geoportal-extensions-leaflet';
import 'geoportal-extensions-leaflet/dist/GpPluginLeaflet-src.css';
import proj4 from 'proj4';
import 'proj4leaflet';

const AdminReunion = () => {

    useEffect(() => {

        // Définir les paramètres de la carte
        const mapSettings = {
            crs: 'EPSG:2154',
            projection: 'IGNF:GEOPORTALFXX',
            resolutions: [8192, 4096, 2048, 1024, 512],
            origin: [-20037508.34, 20037508.34]
        }

        // Définir la projection pour Proj4
        proj4.defs(mapSettings.projection, '+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.9987742 +x_0=600000 +y_0=2200000 +a=6356515 +towgs84=-168, -60, 320, 0, 0, 0, 0 +pm=paris +units=m +no_defs')

        // Créer une carte Leaflet avec une vue initiale centrée sur La Réunion
        const map = L.map('reunion', {
            crs: L.Proj.CRS(mapSettings.crs, mapSettings.projection,{
                    resolutions: mapSettings.resolutions, 
                    origin: mapSettings.origin, 
                    zoomAnimation: true
            })
        }).setView([-21.1151, 55.35364], 10)

        // Ajouter une couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ' OpenStreetMap contributors'
        }).addTo(map)

        // Ajouter le plugin Géoportail
        const geoportalKey = process.env.TOKEN_IGN || '';
        Gp.Services.getConfig({
            apiKey: geoportalKey,
            onSuccess: () => {
                // Ajouter la couche GPU (Plan d'Occupation des Sols)
                const adminLayer = L.geoportalLayer.WMTS('LIMITES_ADMINISTRATIVES_EXPRESS.LATEST', {}).addTo(map);
                adminLayer.setOpacity(0.7); // Ajuster l'opacité
            },
            onFailure: (e) => {
                console.error('Erreur lors de la configuration du service Géoportail', e);
            }
        })
    }, []); // La dépendance vide signifie que cela s'exécute une seule fois après le montage 
    return (
        <section className="map-component" id="reunion" style={{ height: '500px'}}>
            {/* La carte Leaflet sera rendue ici */}

        </section>
    )

}

export default AdminReunion