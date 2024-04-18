// components/MenuInsee.js

import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_insee.png';

const MenuInsee = () => {
    return (
        <Navbar bg="light" variant="light" className="p-2">
            <Navbar.Brand as={Link} to='/'>
                <Image src={logo} alt="logo de l'IGN" width="100" height="40" className="d-inline-block align-top"></Image>
            </Navbar.Brand>
            <Nav className="mr-auto">
                {/* Données locales */}
                <NavDropdown title="Données locales" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/rp">Recensement de la population</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/historiquerp">Historiques du recensement de la population</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/flores">Fichier Localisé des Rémunérations et de l'Emploi Salarié (FLORES)</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/filosofi">Fichier LOcalisé Social et Fiscal (FILOSOFI)</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/etatcivil">Etat Civil</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ree">Répertoire des entreprises et des établissements</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/tourisme">Tourisme</NavDropdown.Item>
                </NavDropdown>
                {/* BDM */}
                <NavDropdown title="BDM" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/serieschronologiques">Séries chronologiques</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/regroupementsthematiques">Regroupements thématiques</NavDropdown.Item>
                </NavDropdown>
                {/* SIRENE */}
                <NavDropdown title="SIRENE" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/listesirene">Liste des entreprises</NavDropdown.Item>
                </NavDropdown>
                {/* Métadonnées */}
                <NavDropdown title="Métadonnées" id="admin-dropdown">
                    <NavDropdown.Item as={Link} to="/geoadmin">Géographie administrative</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/concepts">Concepts</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/nomenclatures">Nomenclatures</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/operationsstats">Opérations statistiques</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/espacerdf">Espace RDF INSEE</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default MenuInsee