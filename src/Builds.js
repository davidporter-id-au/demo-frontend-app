import React, { Component } from 'react';
import {
  CheckBox,
  Col,
  Button,
  Form,
  Checkbox,
  FormGroup,
  formBasicText,
  ControlLabel,
  HelpBlock,
  FormControl
} from 'react-bootstrap';

class Builds extends React.Component {

  render() {
    return (
      <div className="bodyContainer">

        <h1>Placeholder forms</h1>
        <Form horizontal>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Account Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Account ID
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="8481231241" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="primary">Create</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }
}

export default Builds
