import React from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
  Container,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <NavDropdown title="Funding" id="collasible-nav-dropdown">
              <NavDropdown.Item href="myFunding">My funding</NavDropdown.Item>
              <NavDropdown.Item href="allRequest">All Request</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="profile">My profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
