import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DemoIndex } from '../../Data/LandinPage/DemoIndex';
import "../DemoIndex.css";
import { useNavigate } from 'react-router-dom';

const Demoindex = () => {
  const navigate = useNavigate();

  const handleRoot = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path.trim());
  };

  return (
    <section className="section px-lg-5" id="demo">
      <Container fluid className="px-lg-5">
        <Row>
          <Col sm={12} className="text-center">
            <h2 className="title">Available Demos</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          {DemoIndex.map((demo) => (
            <Col lg={4} md={6} key={demo.id}>
              <div className="demo-box text-center "  onClick={() => handleRoot(demo.path)}>
                <img
                  src={demo.imgSrc}
                  alt="demo-img"
                  className="demo-image shadow "
                  style={demoImage}
                />
                <h4 className="text-uppercase fw-bold mt-3">{demo.title}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Demoindex;
const demoImage ={
  border:" 10px solid white",
  borderRadius: "20px",
  width: "100%",
  height: "auto",
  display: "block",
}