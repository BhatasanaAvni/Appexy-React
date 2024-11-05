
import React from 'react';
import { Card, Row, Col, Container,Form } from 'react-bootstrap';
import FormElement from './FormElement';

const FormElements = () => {
  return (
    <Container className='mt-3'>
      <Col xs={12}>
        <Card className='shadow'>
          <Card.Header>
            <Card.Title as="h5" className="mb-0">Form Elements</Card.Title>
            <p className="mb-0">
              Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
            </p>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col sm={6}>
                <FormElement type="text" controlId="default-1" label="Text Input" placeholder="A text input" />
                <FormElement type="password" controlId="default-5" label="Password Input" placeholder="A password input" />
              </Col>
              <Col sm={6}>
                <FormElement type="textarea" controlId="default-textarea" label="Textarea" hint="text are content goes here..." />
              </Col>

              <Col sm={6}>
                <FormElement
                  type="select"
                  controlId="default-3"
                  label="Default Select"
                  options={[
                    { value: 'default_option', label: 'Default Option' },
                    { value: 'option_select_name', label: 'Option select name' },
                    { value: 'option_select_name', label: 'Option select name' },
                  ]}
                />
                <FormElement type="file" controlId="customFile" label="File Upload" />
              </Col>

              <Col sm={6}>
                <FormElement
                  type="select"
                  controlId="default-4"
                  label="Default Select Multiple"
                  options={[
                    { value: 'option_select0', label: 'Default Option' },
                    { value: 'option_select1', label: 'Option select name' },
                    { value: 'option_select2', label: 'Option select name' },
                    { value: 'option_select2', label: 'Option select name' },
                    { value: 'option_select2', label: 'Option select name' },
                  ]}
                  isMultiple={true}
                />
              </Col>

              <Col sm={6}>
                <FormElement
                  type="text"
                  controlId="default7"
                  label="Input with icon"
                  icon="mdi mdi-magnify"
                />
              </Col>

              <Col sm={6}>
                <FormElement
                  type="text"
                  controlId="default8"
                  label="Input with hint text"
                  hint="USD"
                />
              </Col>
            </Row>

            <p className="sub-header pt-2">
              Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.
            </p>
            <Row>
              <Col md={4} className="mb-2 mb-md-0">
                <FormElement type="text" controlId="formControlLg" placeholder=".form-control-lg" />
              </Col>
              <Col md={4} className="mb-2 mb-md-0">
                <FormElement type="text" controlId="defaultInput" placeholder="Default input" />
              </Col>
              <Col md={4} className="mb-2 mb-md-0">
                <FormElement type="text" controlId="formControlSm" placeholder=".form-control-sm" />
              </Col>
            </Row>

            <p className="sub-header pt-4">
              Custom controls including Checkboxes, Radios, Select, Range, etc.
            </p>

            <Row>
              <Col md={6} className="mb-2 mb-md-0">
                <Form.Check type="checkbox" id="customcheck1" label="Check this custom checkbox" />
                <Form.Check type="checkbox" id="customcheck2" label="Check this custom checkbox 2" />
              </Col>
              <Col md={6}>
                <Form.Check type="radio" id="customRadioInline1" name="customRadioInline1" label="Toggle this custom radio" />
                <Form.Check type="radio" id="customRadioInline2" name="customRadioInline1" label="Or toggle this other custom radio" />
              </Col>
            </Row>

            <Row className="mt-3 align-items-center">
              <Col md={6} className="mb-2 mb-md-0">
                <Form.Select id="form-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Range id="customRange1" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default FormElements;
