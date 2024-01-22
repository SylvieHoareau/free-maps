import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const HeaderSection = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Free Maps</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#map">Carte</Nav.Link>
                <Nav.Link href="#about">A propos</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
 
}

export default HeaderSection