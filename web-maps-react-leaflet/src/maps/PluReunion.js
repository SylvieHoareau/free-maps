import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const PluReunion = () => {

    const mapRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Faire une requête à l'API de l'IGN pour récupérer
                const response = await axios.get(
                    'https://apicarto.ign.fr/api/gpu/municipality?insee=97411', {
                        headers: {
                            'Authorization' : 'Bearer j4xdr51on8knp3al50cvpn9a',
                            'Accept': 'application/json'
                        }
                    }
                )

                // TRaiter les données reçues
                const data = response.data
                console.log('Données PLU :', data)

                // Ajouter les données à la carte
                if (mapRef.current) {
                    L.marker([data.center.coordinates[1], data.center.coordinates[0]])
                        .addTo(mapRef.current)
                        .bindPopup(data.nom)
                }      
                
            } catch (error) {
                console.error('Erreur lors de la récupération des données')
            }
        }

        // Initialiser la  carte Leaflet si elle n'a pas déjà été créée
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([-21.1151, 55.35364], 10)

             // Ajouter une couche de tuiles OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ' OpenStreetMap contributors'
            }).addTo(mapRef.current);
        }
        

       

        // Appeler la fonction fetchData pour récupérer les données
        fetchData();

    }, []); // La dépendance vide signifie que cela s'exécute une seule fois après le montage 
    
    return <div id="map" style={{ height: '500px' }}></div>

}

export default PluReunion