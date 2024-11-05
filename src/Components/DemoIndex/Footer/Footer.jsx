import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Footer/Footer.css";
import FooterLogo from "../../../assets/Image/logo-light.png";
const Footer = () => {
  return (
    <>
      <section className="footer bg-dark ">
        <Container className="">
          <Row>
            <Col lg={3} className="text-center text-lg-start">
              <div className="footer-logo mb-4">
                <a href="#">
                  <img src={FooterLogo} alt="Logo" />
                </a>
              </div>
              <a href="#" className="text-white">
                Hello@coderthemes.com
              </a>
              <p className="text-white">+01 (1234 567 890)</p>

              <h5 className="fs-18 mb-3 text-white">Follow Us</h5>
              <ul className="list-inline mt-5">
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    className="footer-social-icon"
                    href="https://www.facebook.com/coderthemes"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    className="footer-social-icon"
                    href="https://twitter.com/coder_themes"
                    target="_blank"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    className="footer-social-icon"
                    href="https://www.linkedin.com/in/coderthemes/"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    className="footer-social-icon"
                    href="skype:coderthemes"
                    target="_blank"
                  >
                    <i className="bi bi-skype"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={9} >
              <Row>
                <Col sm={6} md={3}>
                  <h5 className="fs-22 mb-3 fw-semibold text-white mt-sm-3">
                    About Us
                  </h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Copyright
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Popular Campaign
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h5 className="fs-22 mb-3 fw-semibold text-white mt-sm-3">
                    Our Information
                  </h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Site Map
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Store Hours
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h5 className="fs-22 mb-3 fw-semibold text-white mt-sm-3">
                    My Account
                  </h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Press Inquiries
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Social Media Directories
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Images & B-roll
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Permissions
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Speaker Requests
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h5 className="fs-22 mb-3 fw-semibold text-white mt-sm-3">Policy</h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Application Security
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Software Principles
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Unwanted Software Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="footer-link">
                        Responsible Supply Chain
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer-tagline">
        <div className="container">
          <div className="row justify-content-between py-2">
            <div className="col-md-6">
              <p className="text-white opacity-75 mb-0 fs-14">
                2024 &copy; Appexy-
                <a href="https://coderthemes.com/" className="text-white">
                  Coderthemes.com
                </a>
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <a
                href="javascript:void(0);"
                className="text-white opacity-75 fs-14"
              >
                Terms Conditions & Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
