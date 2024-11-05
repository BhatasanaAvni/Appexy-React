import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const AdminCommonPageTitle = ({ title}) => {
  return (
    <Container>
    <Row>
      <Col lg={12}>
        <div style={{ paddingTop: "130px" }}>
          <h5 className="mb-0">{title}</h5>
          <p className="mt-1 fw-medium">
            Welcome to Appexy! 
          </p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default AdminCommonPageTitle