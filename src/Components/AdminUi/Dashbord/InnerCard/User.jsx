import React from "react";
import { Card, Row, Col, Dropdown, ProgressBar } from "react-bootstrap";
import { MdEmail, MdPhone, MdEdit, MdRefresh, MdDelete } from "react-icons/md";
import  user1  from "../../../../assets/Image/users/user-1.jpg";
const User = () => {
  return (
    <Card className="mb-4 shadow-sm">
    <Card.Body>
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={user1}
              className="img-fluid avatar-sm rounded me-3"
              alt="User"
              style={{ width: '40px', height: '40px'}}
            />
            <div className="flex-grow-1">
              <h4 className="mb-1 pt-3 fs-16">Ms. Jesica Bronz</h4>
              <p className="text-muted pb-0 fs-14">Web & Graphic Designer</p>
            </div>
          </div>
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
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="text-danger">
                <MdDelete className="me-2" /> Deactivate
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <ul className="list-inline py-3 border-bottom">
        <li className="list-inline-item mb-sm-0 mb-2 me-sm-2">
          <a
            href="#"
            className="text-muted fs-14"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <MdEmail className="fs-18 align-middle me-1" />
            Jesica@coderthemes.com
          </a>
        </li>
        <li className="list-inline-item mb-sm-0 mb-2">
          <a href="#" className="text-muted fs-14 "  style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            <MdPhone className="fs-18 align-middle me-2" />
            +00 123-456-789
          </a>
        </li>
      </ul>

      <Row className="align-items-center pt-1">
        <Col md={6}>
          <p className="float-end mb-0">85%</p>
          <h6 className="fw-medium my-0">Project Completion</h6>
          <ProgressBar now={85} className="mt-3" style={{ height: "6px" }} />
        </Col>
        <Col md={6} className="mt-sm-0 mt-4">
          <p className="float-end mb-0">7.5</p>
          <h6 className="fw-medium my-0">Overall Rating</h6>
          <ProgressBar
            variant="danger"
            now={75}
            className="mt-3"
            style={{ height: "6px" }}
          />
        </Col>
      </Row>
    </Card.Body>
  </Card>
  )
}

export default User