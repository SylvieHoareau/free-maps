// components/MenuIgn.js

import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from '../assets/logoIGN_300x200.png';

const MenuIgn= () => {
    return (
        <Navbar bg="light" variant="light" className="p-2">
            {/* <Navbar.Brand as={Link} to='/'>
                <Image src={logo} alt="logo de l'IGN" width="30" height="30" className="d-inline-block align-top"></Image>
            </Navbar.Brand> */}
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/reunion">La Réunion OSM</Nav.Link>
                {/* Administration */}
                <NavDropdown title="Limites administratives" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/region">Régions</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/epci">Intercommunalités</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/commune">Communes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/iris">IRIS</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default MenuIgn