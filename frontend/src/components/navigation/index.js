import React, { useState } from "react";
import jwt from "jsonwebtoken";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="home">
          Seeding<span style={{ color: "green" }}>Fund</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="addFunding">Add Project</NavDropdown.Item>
              <NavDropdown.Item href="myFunding">My funding</NavDropdown.Item>
              <NavDropdown.Item href="allRequest">All Request</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
