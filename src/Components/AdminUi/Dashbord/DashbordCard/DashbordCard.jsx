import React from "react";
import User from "../InnerCard/User";
import { Container, Row, Col } from "react-bootstrap";
import TasksSection from "../InnerCard/Task/TasksSection";
import User1 from "../InnerCard/User1";
const DashbordCard = () => {
  return (
    <>
      <Container>
        <Row className="wrepe">
          <Col md={5} sm={12}>
            <User />
          </Col>
          <Col md={3} sm={12}>
            <TasksSection />
          </Col>
          <Col md={4} sm={12}>
            <User1 />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashbordCard;
