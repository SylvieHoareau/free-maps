// components/MenuSection.js

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuSection= () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/pays">France</Nav.Link>
                <Nav.Link as={Link} to="/region">Région</Nav.Link>
                <Nav.Link as={Link} to="/departement">Département</Nav.Link>
                <Nav.Link as={Link} to="/epci">Intercommunalité</Nav.Link>
                <Nav.Link as={Link} to="/commune">Commune</Nav.Link>
                <Nav.Link as={Link} to="/quartier">Quartier</Nav.Link>
                <Nav.Link as={Link} to="/arrondissement">Arrondissement</Nav.Link>
                <Nav.Link as={Link} to="/unite">Unité Urbaine</Nav.Link>
                <Nav.Link as={Link} to="/zone">Zone d'emploi</Nav.Link>
                <Nav.Link as={Link} to="/bassin">Bassin de vie</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MenuSection