import React from 'react';
import TaskCard from '../Task/TaskCard'; 
import { Col } from 'react-bootstrap';
import { MdCheckCircle, MdEdit } from 'react-icons/md'; 

const TasksSection = () => {
  return (
    <Col lg={12} sm={12}>
      <TaskCard
        title="Tasks Completed"
        count={21}
        icon={<MdCheckCircle className="fs-5 text-black" />} 
        bgClass="bg-success-subtle"
        textClass="text-success-emphasis"
      />
      <TaskCard
        title="Tasks In Progress"
        count={19}
        icon={<MdEdit className="fs-5" />} 
        bgClass="bg-info-subtle"
        textClass="text-info-emphasis"
      />
    </Col>
  );
};

export default TasksSection;
