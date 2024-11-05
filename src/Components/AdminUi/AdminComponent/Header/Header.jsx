import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../../../assets/Image/logo-dark.png";
import { PiDotsNineBold } from "react-icons/pi";
import UserDropdown from "./UserDropdown.jsx";
import brandsimg1 from "../../../../assets/Image/brands/github.png";
import brandsimg2 from "../../../../assets/Image/brands/bitbucket.png";
import brandsimg3 from "../../../../assets/Image/brands/dropbox.png";
import brandsimg4 from "../../../../assets/Image/brands/slack.png";
import brandsimg5 from "../../../../assets/Image/brands/dribbble.png";
import brandsimg6 from "../../../../assets/Image/brands/behance.png";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm  py-2">
      <div className="container">
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="22"
            className="d-inline-block align-middle"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="topnav-menu-content4" className="me-3" />
        <Navbar.Collapse id="topnav-menu-content4">
          <Nav className="mx-auto nav-custom ">
            <Nav.Link
              href="/"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="material-icons fs-20 me-2 text-primary">
                dashboard
              </span>
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="material-icons fs-20 me-2 text-primary">
                folder
              </span>
              Projects
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="material-icons fs-20 me-2 text-primary">
                assessment
              </span>
              Tasks
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="material-icons fs-20 me-2 text-primary">
                bar_chart
              </span>
              Reports
            </Nav.Link>
            <Nav.Link
              href="ui-component.html"
              className="d-flex justify-content-center align-items-center active"
            >
              <span className="material-icons fs-20 me-2 text-primary">
                build
              </span>
              Component
            </Nav.Link>
          </Nav>

          <Nav className="d-none d-lg-flex align-items-lg-center justify-content-lg-center mt-4 mt-lg-0 ">
            <NavDropdown
              title={<PiDotsNineBold />}
              id="notifications"
              className="nav-link"
              style={{fontSize: "30px", color: "#1f61eb"}}
            >
              
              <NavDropdown.Item href="#">
                <img src={brandsimg1} alt="Github" className="me-2" />
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={brandsimg2} alt="Bitbucket" className="me-2" />
                Bitbucket
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={brandsimg3} alt="Dropbox" className="me-2" />
                Dropbox
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={brandsimg4} alt="Slack" className="me-2" />
                Slack
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={brandsimg5} alt="Dribbble" className="me-2" />
                Dribbble
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={brandsimg6} alt="Behance" className="me-2" />
                Behance
              </NavDropdown.Item>
            </NavDropdown>

            <UserDropdown />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
