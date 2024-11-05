import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import badgeData from '../../../../Data/AdminUi/NavComponent/badgeData';

const BadgeSection = () => {
  return (
    <Container className='mt-3'>
      <Row>
        <Col xs={12}>
          <Card className='shadow'>
            <Card.Header>
              <h5 className="card-title mb-1">Badge</h5>
              <p className="mb-0">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units.
              </p>
            </Card.Header>
            <Card.Body>
            
              {badgeData.headings.map((heading, index) => {
                const HeadingTag = `h${heading.level}`; 
                return (
                  <HeadingTag key={index}>
                    {heading.text} <Badge bg="secondary">{heading.badge}</Badge>
                  </HeadingTag>
                );
              })}

      
              <p className="mt-4">
                Badges can be used as part of links or buttons to provide a counter.
              </p>
              <Button variant="primary">
                Notifications <Badge bg="light" text="dark">{badgeData.notificationCount}</Badge>
              </Button>

             
              <p className="mt-4">
                Add any of the below-mentioned modifier classes to change the appearance of a badge.
              </p>
              {badgeData.modifierBadges.map((badge, index) => (
                <Badge key={index} bg={badge.variant} text={badge.textVariant || ''} className="me-1">
                  {badge.text}
                </Badge>
              ))}

           
              <p className="mt-4">
                Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
              </p>
              {badgeData.pillBadges.map((badge, index) => (
                <Badge key={index} bg={badge.variant} pill className="me-1">
                  {badge.text}
                </Badge>
              ))}

              <p className="mt-4">
                Use the <code>.badge .bg-{'{color}'}-subtle</code> modifier class to make badges soft.
              </p>
              {badgeData.subtleBadges.map((badge, index) => (
                <Badge key={index} bg={badge.variant} text={badge.textVariant} className="me-1">
                  {badge.text}
                </Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BadgeSection;
