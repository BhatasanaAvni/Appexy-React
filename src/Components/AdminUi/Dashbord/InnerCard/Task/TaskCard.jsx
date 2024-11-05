import React from 'react';
import { Card } from 'react-bootstrap';

const TaskCard = ({ title, count, icon, bgClass, textClass }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-center">
         
          <div className={`d-flex justify-content-center align-items-center rounded ${bgClass} me-3`} style={{ width: '3rem', height: '3rem' }}>
            {icon}
          </div>
          <div className="flex-grow-1">
            <h3 className="mt-0 mb-1">{count}</h3>
            <p className={`text-muted fs-16 mb-0 ${textClass}`}>{title}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
