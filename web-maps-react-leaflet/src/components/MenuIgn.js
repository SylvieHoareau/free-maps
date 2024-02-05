// components/MenuIgn.js

import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuIgn= () => {
    return (
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/reunion">La Réunion OSM</Nav.Link>
                {/* Administration */}
                <NavDropdown title="Limites administratives" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/region">Régions</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/epci">Intercommunalités</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/commune">Communes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/iris">IRIS</NavDropdown.Item>
                </NavDropdown>
                {/* Agriculture */}
                {/* Altimétrie */}
                {/* Calcul */}
                {/* Cartes */}
                {/* Cartovecto */}
                {/* CLC */}
                {/* Découverte */}
                {/* Economie */}
                {/* ENR */}
                {/* Environnement */}
                {/* Essentiels */}
                {/* Géodésie */}
                {/* INSPIRE */}
                {/* Parcellaire */}
                {/* Satellite */}
                {/* Eta-Major */}
                {/* Topographie */}
                {/* Transports */}
            </Nav>
        </Navbar>
    )
}

export default MenuIgn