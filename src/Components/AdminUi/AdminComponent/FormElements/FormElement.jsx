// src/Components/FormElement.jsx
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const FormElement = ({ type, controlId, label, placeholder, options, isMultiple, icon, hint }) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      {type === 'text' || type === 'password' ? (
        <Form.Control
          type={type}
          placeholder={placeholder}
          defaultValue={type === 'password' ? '12345678' : undefined}
        />
      ) : type === 'textarea' ? (
        <Form.Control as="textarea" rows={5} defaultValue={hint} />
      ) : type === 'select' ? (
        <Form.Select multiple={isMultiple}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      ) : type === 'file' ? (
        <Form.Control type="file" multiple />
      ) : (
        <InputGroup>
          <Form.Control type={type} aria-label={placeholder} />
          {icon && <InputGroup.Text className={icon}></InputGroup.Text>}
          {hint && <InputGroup.Text>{hint}</InputGroup.Text>}
        </InputGroup>
      )}
    </Form.Group>
  );
};

export default FormElement;
