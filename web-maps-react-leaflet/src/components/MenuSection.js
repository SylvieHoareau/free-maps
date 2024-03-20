// components/MenuSection.js

import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuSection= () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/populationslegales">Populations Légales</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MenuSection