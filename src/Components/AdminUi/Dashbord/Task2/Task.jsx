import React from 'react';
import { Card, Form, Badge } from 'react-bootstrap';
import { MdFormatListBulleted, MdEmail } from 'react-icons/md'; 

const Task = ({ id, title, deadline, subtasksCompleted, totalSubtasks, commentsCount, priority }) => {
  return (
    <div className="row mb-2 ">
      <div className="col">
        <Card mb={0}>
          <Card.Body>
            <div className="row align-items-center justify-content-sm-between">
              <div className="col-lg-6">
                <Form.Check type="checkbox" id={id}>
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label htmlFor={id}>{title}</Form.Check.Label>
                </Form.Check>
              </div>
              <div className="col-lg-3">
                <Badge bg="info-subtle" text="info-emphasis" pill>
                  {deadline}
                </Badge>
              </div>
              <div className="col-lg-3">
                <ul className="list-inline text-sm-end mb-0">
                  <li className="list-inline-item pe-3">
                    <span className="fs-13 fw-medium">
                      <MdFormatListBulleted className="text-primary fs-22 align-middle" /> 
                      {subtasksCompleted}/{totalSubtasks}
                    </span>
                  </li>
                  <li className="list-inline-item pe-3">
                    <span className="fs-13 fw-medium">
                      <MdEmail className="text-primary fs-22 align-middle" /> 
                      {commentsCount}
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className={`badge bg-${priority.bg}-subtle text-${priority.text}-emphasis p-1`}>
                      {priority.label}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Task;
