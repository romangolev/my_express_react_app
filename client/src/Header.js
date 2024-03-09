import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
     return (
          <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
               <Navbar.Brand href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">My App</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                         <Nav.Link href="#home" className="nav-link px-2 link-secondary">Home</Nav.Link>
                         <Nav.Link href="#about">About</Nav.Link>
                         <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
               </Navbar.Collapse>
          </Navbar>
     );
};

export default Header;