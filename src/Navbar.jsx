import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css"; // Import your CSS file

export default function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="nav-bar-nav bg-transparent py-5">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <h1 className="text-white">ARLINDI SH.P.K</h1>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="custom-navbar-collapse "
        >
          <Nav className="ms-auto div-navbar">
            <Nav.Link className="nav-bar" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-bar" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-bar" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-bar" as={Link} to="/projects">
              Projects
            </Nav.Link>
            {/* <Nav.Link className="nav-bar" as={Link} to="/blog">
              Blog
            </Nav.Link> */}
            <Nav.Link className="nav-bar" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
