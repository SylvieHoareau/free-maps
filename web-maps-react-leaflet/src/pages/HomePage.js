import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <div>
                            <Button variant="primary">Commencer</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomePage