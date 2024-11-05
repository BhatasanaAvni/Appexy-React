import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DarkLogo } from "../../../assets/Image/Images";
import Userimg1 from "../../../assets/Image/users/user-1.jpg";
import "../AdminNav/Admin.css";
import { useState } from "react";


import {
  BehanceBrand,
  BitBucketBrands,
  DribbbleBrands,
  DropboxBrands,
  GithubBrands,
  InstagramBrands,
  MessengerBrands,
  SlackBrands,
} from "../../../assets/Image/brands/Bradns";
const AdminNav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm fixed-top admin-nav">
      <div className="container">
        <Link className="navbar-brand me-lg-3 me-auto" to="/">
          <img src={DarkLogo} height="22" alt="Logo" />
        </Link>

        <Navbar.Toggle aria-controls="topnav-menu-content4" className="me-3" />
        <Navbar.Collapse id="topnav-menu-content4">
          <Nav className="mx-auto nav-custom">
            <Nav.Link
              as={Link}
              onClick={() => handleNavClick("/admin-dashbords")}
              className={
                activeLink === "/admin-dashbords" ? "custom-active" : ""
              }
              to="/admin-dashbords"
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-speedometer fs-20 flex-shrink-0 me-2 align-middle lh-1 text-primary"></i>
                <span>Dashboard</span>
              </div>
            </Nav.Link>

            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <i className="bi bi-folder fs-20 flex-shrink-0 me-2 align-middle lh-1 text-primary"></i>
                <span>Projects</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <i className="bi bi-bag fs-20 flex-shrink-0 me-2 align-middle lh-1 text-primary"></i>
                <span>Tasks</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <i className="bi bi-graph-up fs-20 flex-shrink-0 me-2 align-middle lh-1 text-primary"></i>
                <span>Reports</span>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={() => handleNavClick("/admin-nav")}
              className={activeLink === "/admin-nav" ? "custom-active" : ""}
              to="/admin-nav"
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-compass fs-20 flex-shrink-0 me-2 align-middle lh-1 text-primary"></i>
                <span>Component</span>
              </div>
            </Nav.Link>
          </Nav>

          <Nav className="d-none d-lg-flex align-items-lg-center mt-4 mt-lg-0">
            <NavDropdown
              title={<i className="bi bi-grid fs-22 text-primary"></i>}
              id="notifications"
              align="end"
            >
              <Row className="" style={customRowStyle}>
                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img src={GithubBrands} alt="GitHub" className="me-2" />
                    <br />
                    GitHub
                  </NavDropdown.Item>
                </Col>
                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img
                      src={BitBucketBrands}
                      alt="Bitbucket"
                      className="me-2"
                    />
                    <br />
                    Bitbucket
                  </NavDropdown.Item>
                </Col>

                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img src={DropboxBrands} alt="Dropbox" className="me-2" />
                    <br />
                    Dropbox
                  </NavDropdown.Item>
                </Col>
                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img src={SlackBrands} alt="Slack" className="me-2" />
                    <br /> Slack
                  </NavDropdown.Item>
                </Col>

                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img src={DribbbleBrands} alt="Dribbble" className="me-2" />
                    <br />
                    Dribbble
                  </NavDropdown.Item>
                </Col>
                <Col xs={6} style={customColStyle}>
                  <NavDropdown.Item href="#">
                    <img src={BehanceBrand} alt="Behance" className="me-2" />
                    <br />
                    Behance
                  </NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>

            <div className="d-flex align-items-center" onClick={handleToggle} style={{ cursor: "pointer" }}>
        <img
          src={Userimg1}
          style={{ height: "36px" }}
          className="rounded-circle me-2"
          alt="User"
        />
        <div>
          <span className="fw-semibold fs-13">Jesica B</span>
          <span className="text-muted fs-13">Admin</span>
        </div>
  
      </div>

      <NavDropdown
        show={dropdownOpen}
        onToggle={handleToggle}
        id="user-dropdown"
        align="end"
        drop="down"
        className="mt-2"
        style={{ border: 'none', outline: 'none' }} 
      >
        <NavDropdown.Item href="#">
          <i className="bi bi-person fs-20 lh-1 align-middle me-1"></i>{" "}
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          <i className="bi bi-gear fs-20 lh-1 align-middle me-1"></i>{" "}
          Settings
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          <i className="bi bi-headset fs-20 lh-1 align-middle me-1"></i>{" "}
          Support
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">
          <i className="bi bi-lock fs-20 lh-1 align-middle me-1"></i> Sign
          Out
        </NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AdminNav;
const customRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "15px",
  padding: "10px 20px",
  borderRadius: "8px",
  backgroundColor: "#f8f9fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
const customColStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};
