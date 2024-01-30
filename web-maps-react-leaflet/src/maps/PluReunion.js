import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const PluReunion = () => {

    useEffect(() => {
        // CRéer une carte Leaflet avec une vue initial centrée sur La Réunion
        const map = L.map('reunion').setView([-21.1151, 5535364])

        // Ajouter une couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ' OpenStreetMap contributors'
        }).addTo(map)

        // Utiliser l'API de l'IGN pour récupérer les données PLU
        const ignApiUrl = '';
        fetch(ignApiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Traiter les données et les ajouter à la carte
                data.feature.forEach((feature) => { 
                    L.geoJSON(feature).addTo(map);
                })
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données IGN', error)
            })
    }, []); // La dépendance vide signifie que cela s'exécute une seule fois après le montage
    return (
        <section className="map-component" id="reunion" style={{ height: '500px'}}>
            {/* La carte Leaflet sera rendue ici */}

        </section>
    )

}

export default PluReunion