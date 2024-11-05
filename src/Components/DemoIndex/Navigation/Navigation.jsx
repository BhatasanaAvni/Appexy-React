import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { DarkLogo, LightLogo } from "../../../assets/Image/Images";
import "../Navigation/Navigation.css";

const MyNavbar = ({ isLight, menuColor, isDarkSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logo = isDarkSection ? DarkLogo : isScrolled ? DarkLogo : LightLogo;
  const textColor = isDarkSection
    ? "text-dark"
    : isScrolled
    ? "text-dark"
    : menuColor;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom sticky-${isLight ? "light" : "dark"} ${
        isScrolled ? "bg-white text-black" : ""
      }`}
      id="navbar-sticky"
    >
      <Container>
 
        <Navbar.Brand href="#home" className="text-uppercase">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarCollapse">
          <span className="material-icons">menu</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarCollapse">
          <Nav className="mx-auto" id="mySidenav">
            {[
              "Home",
              "Features",
              "Screenshot",
              "Testimonial",
              "Pricing",
              "Contact Us",
            ].map((link, index) => (
              <Nav.Link
                key={index}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className={`custom-nav-link ${textColor}`}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>

          <Nav>
            <Nav.Link
              href="#"
              className={textColor}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </Nav.Link>
            <Button
              variant={isLight ? "outline-light" : "outline-dark"}
              size="sm"
              className="custom-nav-btn" 
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
