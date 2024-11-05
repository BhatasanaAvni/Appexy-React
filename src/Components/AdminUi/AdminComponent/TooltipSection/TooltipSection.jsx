import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../TooltipSection/TooltipExample.css'; 

function TooltipExample() {
  return (
    <Container className='mt-3'>
      <Card className='shadow'>
        <Card.Header>
          <h5>Tooltips</h5>
        </Card.Header>
        <Card.Body>
          <p>
            Examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.
          </p>
          {['top', 'right', 'bottom', 'left'].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button className="tooltip-button" style={{ margin: '5px' }}>
                Tooltip on {placement}
              </Button>
            </OverlayTrigger>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TooltipExample;
