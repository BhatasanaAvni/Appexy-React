import React from 'react';
import { Button as BootstrapButton, Card, Container, Row, Col } from 'react-bootstrap';
import buttonData from '../../../../Data/AdminUi/NavComponent/Button';

const ButtonsComponent = () => {
  const renderButtons = (buttons, outline = false, rounded = false, size = '') => (
    buttons.map((button, index) => (
      <BootstrapButton
        key={index}
        variant={button.variant}
        className={`me-2 mb-2  ${button.size ? `btn-${button.size}` : ''} ${button.rounded ? 'rounded-pill' : ''}`}
      >
        {button.icon && button.iconPosition === 'left' && <i className={`mdi ${button.icon} fs-22 me-1`}></i>}
        {button.text}
        {button.icon && button.iconPosition === 'right' && <i className={`mdi ${button.icon} fs-22 ms-1`}></i>}
        {button.onlyIcon && <i className={`mdi ${button.icon} fs-22`}></i>}
      </BootstrapButton>
    ))
  );

  return (
    <Container className='mt-3'>
      <Row>
        <Col xs={12} >
          <Card className='shadow'>
            <Card.Header>
              <h5 className="card-title mb-0">Buttons</h5>
            </Card.Header>
            <Card.Body>

        
              <p className="sub-header">
                Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
              </p>
              <div className="button-list">
                {renderButtons(buttonData[0].buttons)}
              </div>
              <p className="sub-header pt-2">
                Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.
              </p>
              <div className="button-list">
                {renderButtons(buttonData[1].buttons)}
              </div>

        
              <p className="sub-header pt-2">
                Add a class <code>.btn-rounded</code> with the default modifier classes to have rounded edges.
              </p>
              <div className="button-list mt-2">
                {renderButtons(buttonData[2].buttons)}
              </div>

            
              <p className="sub-header pt-2">
                Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
              </p>
              <div className="button-list">
                {renderButtons(buttonData[3].buttons)}
              </div>

        
              <p className="sub-header pt-2">Buttons with icon - variations</p>
              <div className="button-list">
                {renderButtons(buttonData[4].buttons)}
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonsComponent;
