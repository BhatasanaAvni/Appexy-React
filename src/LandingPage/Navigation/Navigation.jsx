import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { DarkLogo } from "../../assets/Image/Images.jsx";
import "./Navigation.css"; // Make sure this has the correct styles for fixed positioning
import CommonButton from "../../CommonComponents/CommonButton.jsx";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom bg-white">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo and Toggle Button Container */}
        <div className="d-flex align-items-center">
          {/* Logo */}
          <Navbar.Brand href="index-1.html" className="text-uppercase">
            <img src={DarkLogo} alt="Logo" />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="navbarCollapse">
            <span className="material-icons">menu</span>
          </Navbar.Toggle>
        </div>

        {/* Collapsible Links */}
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#demo" className="custom-nav-link">
              Demo
            </Nav.Link>
            <Nav.Link href="#admin-demo" className="custom-nav-link">
              Admin Demo
            </Nav.Link>
          </Nav>

          <Nav>
            <CommonButton
              icon="shopping_cart"
              label="Buy Now"
              link="https://1.envato.market/appexy"
              className="custom-nav-btn"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
