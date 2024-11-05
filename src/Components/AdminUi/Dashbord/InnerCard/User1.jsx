import React from 'react';
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { MdEdit, MdRefresh } from 'react-icons/md';
import { TrendingUp, TrendingDown } from 'react-feather';

const User1 = () => {
  return (
    <Card>
    <Card.Body>
      <Row>
        <Col>
          <h4 className="mb-3 mt-0 fs-16">Revenue</h4>
        </Col>
        <Col xs="auto" className="text-end">
          <Dropdown>
            <Dropdown.Toggle as="a" href="#" className="btn-link text-muted">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">
                <MdEdit className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <MdRefresh className="me-2" /> Refresh
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <h5 className="mb-3">$2,100.00</h5>
      <p className="text-muted">Last Week</p>
      <hr className="mb-1" />
      <Row>
        <Col xs={6}>
          <div className="d-flex align-items-center mt-2">
            <div className="me-3 flex-shrink-0">
              <TrendingUp className="text-success" />
            </div>
            <div className="flex-grow-1">
              <h5 className="mt-0 mb-0">15%</h5>
              <p className="text-muted mb-0 fs-13">Prev Week</p>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className="d-flex align-items-center mt-2">
            <div className="me-3 flex-shrink-0">
              <TrendingDown className="text-danger" />
            </div>
            <div className="flex-grow-1">
              <h5 className="mt-0 mb-0">10%</h5>
              <p className="text-muted mb-0 fs-13">Prev Month</p>
            </div>
          </div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
  )
}

export default User1