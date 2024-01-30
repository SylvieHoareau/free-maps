import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

const CodesPostaux = () => {

    const wfsEndpoint = 'https://apicarto.ign.fr/api/codes/codes-postaux/communes/97411';

    const [geoJSONData, setGeoJSONData] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Faire une requête à l'API de l'IGN pour récupérer
                const response = await axios.get(
                    wfsEndpoint, {
                        headers: {
                            'Authorization' : 'Bearer j4xdr51on8knp3al50cvpn9a',
                            'Accept': 'application/json'
                        }
                    }
                )

                setGeoJSONData(response.data);
                // console.log('Données PLU :', response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données')
            }
        }

        // Appeler la fonction fetchData pour récupérer les données
        fetchData();

    }, [wfsEndpoint]);
    
    return (
        <MapContainer center={[-21.1145, 55.5320]} zoom={10} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
            />
            {geoJSONData && <GeoJSON data={geoJSONData} />}
        </MapContainer>
    )

}

export default CodesPostaux