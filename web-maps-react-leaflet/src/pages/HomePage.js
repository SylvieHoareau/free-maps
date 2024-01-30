import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../../node_modules/leaflet/dist/leaflet.css'; // Fichier CSS de Leaflet
// import '../../node_modules/react-leaflet/dist/react-leaflet.css'; // Fichier CSS de react-leaflet

const HomePage = () => {

    return (
        <Container className="mt-3">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h1>Bienvenue sur FreeMaps</h1>
                    </Card.Title>
                    <Card.Text>
                        <p>
                            Découvrez le monde avec nos cartes interactives
                        </p>
                        <p>
                            <Button variant="primary">Commencer</Button>
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomePage