import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@mui/material';

const WorkBox = ({ iconClass, title, description, arrowImg, bgClass }) => {
  return (
    <Col lg={4} className="mb-5 mb-lg-0">
      <div className="work-box px-lg-5 text-center">
        <div
          className={`work-icon ${bgClass} mb-4`}
          style={{
            fontSize: '56px',
            borderRadius: '28% 72% 50% 50% / 26% 20% 80% 74%',
            height: '96px',
            width: '96px',
            margin: '0 auto',
          }}
        >
          <Icon style={{ fontSize: '56px' }}>{iconClass}</Icon>
        </div>
        <h5 className="fw-semibold">{title}</h5>
        <p className="text-muted">{description}</p>

        {arrowImg && (
          <img
            src={arrowImg}
            alt=""
            className="work-arrow"
          />
        )}
      </div>
    </Col>
  );
};

export default WorkBox;
