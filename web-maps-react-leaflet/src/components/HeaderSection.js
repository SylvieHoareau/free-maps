// components/HeaderSection.js

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Free Maps</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/reunion">La Réunion</Nav.Link>
                <Nav.Link as={Link} to="/maurice">Maurice</Nav.Link>
                <Nav.Link as={Link} to="/rodrigues">Rodrigues</Nav.Link>
                <Nav.Link as={Link} to="/madagascar">Madagascar</Nav.Link>
                <Nav.Link as={Link} to="/about">A propos</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default HeaderSection