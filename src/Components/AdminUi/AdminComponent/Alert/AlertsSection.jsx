
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Alert from "./Alert";
import alertData from "../../../../Data/AdminUi/NavComponent/alertData";

const AlertsSection = ({ variant, message, dismissible, title, style }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card className="shadow">
            <Card.Header>
              <h5 className="card-title mb-1">Alerts</h5>
              <p className="mb-0">
                Provide contextual feedback messages for typical user actions
                with the handful of available and flexible alert messages.
              </p>
            </Card.Header>
            <Card.Body>
              <h5>Default Alerts</h5>
              {alertData.slice(0, 6).map((alert) => (
                <Alert
                  key={alert.id}
                  variant={alert.variant}
                  message={alert.message}
                  dismissible={alert.dismissible}
                  style={{
                    color: "black",
                    backgroundColor: getBackgroundColor(alert.variant),
                  }}
                />
              ))}
              <h5>Outline Alerts</h5>
              <Alert
                key={alert.id}
                variant="light"
                message={alert.message}
                title={alert.title}
                dismissible={alert.dismissible}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AlertsSection;
const getBackgroundColor = (variant) => {
  switch (variant) {
    case "primary":
      return "#007bff"; 
    case "secondary":
      return "#6c757d"; 
    case "success":
      return "#d4edda"; 
    case "danger":
      return "#f8d7da"; 
    case "warning":
      return "#fff3cd";
    case "info":
      return "#d1ecf1"; 
    case "light":
      return "#fefefe";
    default:
      return "#f0f0f0"; 
  }
};
