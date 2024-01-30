// components/MenuIgn.js

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuIgn= () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/reunion">La Réunion OSM</Nav.Link>
                <Nav.Link as={Link} to="/plu">PLU</Nav.Link>
                <Nav.Link as={Link} to="/administration">Limites administratives</Nav.Link>
                <Nav.Link as={Link} to="/commune">Communes</Nav.Link>v
                <Nav.Link as={Link} to="/codes">Codes Postaux</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MenuIgn