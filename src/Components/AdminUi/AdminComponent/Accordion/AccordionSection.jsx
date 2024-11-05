import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap'; 
import CustomAccordion from '../Accordion/Accordion'; 
import accordionData from '../../../../Data/AdminUi/NavComponent/accordionData';

const AccordionSection = () => {
  return (
    <Container className='shadow py-3 mt-3 rounded'>
      <div className="col-12 mt-3">
        <Card>
          <Card.Header>
            <h5 className="card-title mb-1">Accordions</h5>
            <p className="mb-0">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>
          </Card.Header>
          <Card.Body>
            <CustomAccordion accordionData={accordionData} />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
export default AccordionSection;
