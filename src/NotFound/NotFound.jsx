
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/'); 
  };

  return (
    <Container className="text-center py-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="fw-bold">Oops! Page Not Found</h2>
          <p className="lead">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button variant="primary" onClick={handleHomeRedirect}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
