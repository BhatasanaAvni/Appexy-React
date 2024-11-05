import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section className="py-4 mt-3 position-relative border-top border-light-subtle">
      <Container>
        <Row className="align-items-center">
          <Col>
            <ul className="list-inline list-with-separator mb-0">
              <li className="list-inline-item me-0"><a href="#">About</a></li>
              <li className="list-inline-item me-0"><a href="#">Privacy</a></li>
              <li className="list-inline-item me-0"><a href="#">Terms</a></li>
              <li className="list-inline-item me-0"><a href="#">Developers</a></li>
              <li className="list-inline-item me-0"><a href="#">Support</a></li>
              <li className="list-inline-item me-0">
                <a href="#">
                  Careers <span className="align-middle badge bg-info-subtle text-info rounded-pill fw-normal fs-11 px-2 py-1">We're hiring</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md="auto" className="text-md-end mt-2 mt-md-0">
            <p className="fs-14 mb-0">{currentYear} © Appexy. All rights reserved. Crafted by <a href="https://coderthemes.com/">Coderthemes</a></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
