import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import adminDemoData from '../../Data/LandinPage/AdminUi'; 
import { useNavigate } from 'react-router-dom';
const AdminUi = () => {
  const navigate = useNavigate();

  const handleRoot = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path.trim());
   
  };

  return (
    <section className="px-lg-5 pb-5 mb-5" id="admin-demo">
      <Container fluid className="px-lg-5">
        <Row>
          <Col sm={12} className="text-center">
            <h2 className="title">Admin Demos</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          {adminDemoData.map(demo => (
            <Col lg={4} md={6} key={demo.id}>
              <div className="demo-box text-center"  onClick={() => handleRoot(demo.path)}>
                <a href={demo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={demo.imgSrc}
                    alt="demo-img"
                    className="demo-image shadow" 
                    style={demoImage}
                  />
                </a>
                <h4 className="text-uppercase fw-bold mt-3">{demo.title}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default AdminUi
const demoImage ={
  border:" 2px solid white",
  borderRadius: "5px",
  width: "100%",
  height: "auto",
  display: "block",
}