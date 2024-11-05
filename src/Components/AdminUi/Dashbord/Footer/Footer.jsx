import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

const Footer= () => {
  return (
    <section className="py-4 position-relative border-top border-light-subtle">
      <Container>
        <Row className="align-items-center">
          <Col>
            <ul className="list-inline mb-0 gap-2 d-flex ">
              <li className="list-inline-item me-0">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item me-0">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item me-0">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item me-0">
                <a href="#">Developers</a>
              </li>
              <li className="list-inline-item me-0">
                <a href="#">Support</a>
              </li>
              <li className="list-inline-item me-0">
                <a href="#">
                  Careers{" "}
                  <Badge bg="info-subtle" className="text-info-emphasis rounded-pill fw-normal fs-11 px-2 py-1">
                    We're hiring
                  </Badge>
                </a>
              </li>
            </ul>
          </Col>
          <Col md="auto" className="text-md-end mt-2 mt-md-0">
            <p className=" mb-0" style={{ fontSize: '14px' }}>
            &copy; 2024 Appexy. Design &amp; Develop by
            ..
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
