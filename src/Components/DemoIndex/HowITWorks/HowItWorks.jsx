import React from 'react';
import WorkBox from './WorkBox';
import { HowITWorkData } from '../../../Data/DemoIndex/DemoAllData';
import { Container, Row, Col } from 'react-bootstrap';

const HowItWorks = () => {
  return (
    <Container className='custom-container section mt-3'>
      <Row className="justify-content-center mb-5">
        <Col md={8} lg={11} className="text-center">
          <h6 className="subtitle">
            How it <span className="fw-bold">Works</span>
          </h6>
          <h2 className="title">How does it work?</h2>
          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
          </p>
        </Col>
      </Row>

      <Row>
        {HowITWorkData.map((box, index) => (
          <WorkBox
            key={index}
            iconClass={box.iconClass}
            title={box.title}
            description={box.description}
            arrowImgTop={box.arrowImgTop} 
            arrowImgBottom={box.arrowImgBottom} 
            bgClass={box.bgClass}
          />
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
