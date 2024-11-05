import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComponent = ({ title, items }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id={`dropdown-${title}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} href={item.link}>
            {item.label}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
