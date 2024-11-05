import React from 'react';
import { Card, Col, Row, Dropdown, Badge, ProgressBar } from 'react-bootstrap';

const ProjectCard = ({ date, title, status, description, progress, avatars = [], cusprogressbar }) => {  // Add cusprogressbar here
    return (
        <Col md={4}>
            <Card>
                <Card.Body>
                    <Row className="align-items-center">
                        <Col>
                            <p className="text-muted fs-13 fw-medium mb-0">{date}</p>
                        </Col>
                        <Col xs="auto" className="text-end">
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="btn-link text-muted" id="dropdown-basic">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="#"><i className="mdi mdi-eye me-2"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="mdi mdi-circle-edit-outline me-2"></i>Edit</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="text-danger" href="#"><i className="mdi mdi-trash-can-outline me-2"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <h5 className="mt-0 mb-1"><a href="">{title}</a></h5>
                        <Badge className="mb-1 mt-2" style={{ color: 'black' }} bg={status === "Designing" ? "primary-subtle" : status === "Planning" ? "success-subtle" : "info-subtle"}>
                            {status}
                        </Badge>
                        <p className=" mt-3" style={{fontSize:"15px"}}>{description}</p>
                    </div>
                    <div className="mt-4">
                        <Row>
                            <Col>
                                <h6 className="mt-0">Progress</h6>
                            </Col>
                            <Col className="text-end">
                                <small className="fw-semibold">{progress}%</small>
                            </Col>
                        </Row>
                        <ProgressBar now={cusprogressbar.now} variant={cusprogressbar.variant} style={{height:"6px"}}/>  
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="avatar-group">
                                {avatars.length > 0 ? avatars.map((avatar, index) => (
                                    <a key={index} href="#" className="avatar-group-item mb-0">
                                        <img 
                                            src={avatar} 
                                            alt="avatar" 
                                            className="img-fluid avatar-sm rounded-circle img-thumbnail" 
                                            style={{ width: '40px', height: '40px', borderRadius: '50%' }} 
                                        />
                                    </a>
                                )) : <p>No avatars available</p>}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;
