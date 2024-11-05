import React from "react";
import Task from "../Task2/Task";
import { Button, Container, Spinner } from "react-bootstrap";
import { MdArrowForward } from "react-icons/md"; 

const TasksList = ({ tasks, isLoading }) => {
  return (
    <Container>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="row">
            <div className="col">
              <h4 className="mb-3 mt-0 fs-16">Tasks</h4>
            </div>
            <div className="col-auto text-end">
              <a
                href="#"
                className="fw-semibold text-primary fs-13 border-primary" 
                aria-label="View all tasks"
              >
                View All <MdArrowForward className="ms-1" />
              </a>
            </div>
          </div>

        
          {isLoading ? (
            <div className="text-center mt-3">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            tasks.map((task) => <Task key={task.id} {...task} />)
          )}

          <div className="row mb-3 mt-4">
            <div className="col-12">
              <div className="text-center">
                <Button
                  variant="outline-primary"
                  size="md"
                  style={{ borderStyle: "dashed" }}
                  onClick={() => {
                   
                  }}
                  aria-label="Load more tasks"
                >
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-1"
                  />
                  Loading... 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TasksList;
