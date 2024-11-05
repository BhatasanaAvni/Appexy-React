// src/Components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaSkype,
} from "react-icons/fa"; 
import "./Footer.css"; 

const Footer = () => {
  return (
    <>
    
      <div className="position-relative ">
        <div className="shape overflow-hidden text-light">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <footer className="bg-light footer-one">
        <div className="footer-one-alt">
          <Container>
            <Row className="d-flex  align-items-center">
              <Col sm={6}>
                <p className="mb-0 fs-14 copyright text-dark">
                  &copy; 2024 Appexy. Design &amp; Develop by
                  Coderthemes
                </p>
              </Col>
              <Col sm={6}>
                <ul className="list-inline footer-social-one mb-0 float-end">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/coderthemes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/coder_themes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/coderthemes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="skype:coderthemes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaSkype />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
