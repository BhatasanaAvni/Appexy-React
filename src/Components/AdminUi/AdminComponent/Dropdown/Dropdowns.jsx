import React from "react";
import { Card, Dropdown, ButtonGroup,Container } from "react-bootstrap"; 
import DropdownComponent from "../Dropdown/DropdownComponent"; 

const Dropdowns = () => {
  const dropdownItems1 = [
    { label: "Action", link: "#" },
    { label: "Another action", link: "#" },
    { label: "Something else here", link: "#" },
    { label: "Separated link", link: "#" }
  ];

  const dropdownItems2 = [
    { label: "Action", link: "#" },
    { label: "Another action", link: "#" },
    { label: "Something else here", link: "#" },
    { label: "Separated link", link: "#" }
  ];

  return (
    <Container className='mt-3'>

    <div className="col-12">
      <Card className='shadow'>
        <Card.Header>
          <h5 className="card-title mb-0">Dropdowns</h5>
          <p className="mb-0">
            Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
          </p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex flex-wrap gap-1 mb-2">
            <DropdownComponent title="Dropdown button" items={dropdownItems1} />
            <ButtonGroup>
              <DropdownComponent title="Split Button Dropdown" items={dropdownItems2} />
            
            </ButtonGroup>
          </div>
          <p className="">Dropdown menu position variations</p>
          <div className="d-flex flex-wrap gap-1 mb-2">
            <DropdownComponent title="Left Align" items={dropdownItems1} />
            <DropdownComponent title="Right Align" items={dropdownItems1} />
            <DropdownComponent title="Up Align" items={dropdownItems1} />
          </div>
        </Card.Body>
      </Card>
    </div>
    </Container>
  );
};

export default Dropdowns;
