import React from 'react';
import { Accordion } from 'react-bootstrap';
const CustomAccordion = ({ accordionData = [] }) => {
  return (
    <Accordion eventKey="0">
      {accordionData.map((item, index) => (
        <Accordion.Item eventKey={String(index)} key={index}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
