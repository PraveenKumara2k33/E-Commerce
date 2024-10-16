import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  const expand = 'lg';
  return (
    <Navbar expand={expand} className="mb-3 bg-custom">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../img/logo1.png" alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              {/* <Nav.Link href="#action2">Shop</Nav.Link> */}
              <NavDropdown title="Shop" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action4">About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Contact</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action3">Blog</Nav.Link>
              <Nav.Link href="#action4">About</Nav.Link>
              <Nav.Link href="#action5">Contact</Nav.Link>
              <Nav.Link href="#action5"><FaBagShopping /></Nav.Link>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
