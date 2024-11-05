import React from 'react';
import { Breadcrumb as BootstrapBreadcrumb, Container, Row, Col, Card } from 'react-bootstrap';
import breadcrumbData from '../../../../Data/AdminUi/NavComponent/breadcrumbData';

const BreadcrumbComponent = () => {
  return (
    <Container className=' mt-3'>
      <Row>
        <Col xs={12}>
          <Card className='shadow'>
            <Card.Header>
              <h5 className="card-title mb-1">Breadcrumb</h5>
              <p className="mb-0">
                Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
              </p>
            </Card.Header>
            <Card.Body>
              {breadcrumbData.map((breadcrumb, index) => (
                <BootstrapBreadcrumb key={index} className="bg-light p-3">
                  {breadcrumb.items.map((item, idx) => (
                    <BootstrapBreadcrumb.Item
                      key={idx}
                      href={item.href || undefined}
                      active={item.active}
                    >
                      {item.icon && <i className={`mdi ${item.icon} fs-22 align-middle lh-1`}></i>}
                      {item.text}
                    </BootstrapBreadcrumb.Item>
                  ))}
                </BootstrapBreadcrumb>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadcrumbComponent;
