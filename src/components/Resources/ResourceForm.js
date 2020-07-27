import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ResourceForm.css";

const ResourceForm = props => {
    const [Resource, setResource] = useState({ userId:parseInt(sessionStorage.activeUserID), title:"", synopsis:"", url:"", date: Date.now(), user: sessionStorage.activeUser})
    let money=props.construct;

    const handleFieldChange = evt => {
        const stateToChange = { ...Resource };
        stateToChange[evt.target.id] = evt.target.value;
        setResource(stateToChange)
    }

    const ConstructNewsResource = () => {
        money(Resource)
    }
       
    

    return (
        <Form className="ResourceFormContainer">
<Row className="ResourceFormRow">
    <Col className="ResourceFormCol">
  <Form.Group className="ResourceFormGrp" controlId="title">
    <Form.Label className="ResourceFormLbl">Title</Form.Label>
    <Form.Control
              className="ResourceFormCtl"
              onChange={handleFieldChange} 
              type="text" 
              placeholder="Enter Title" />
  </Form.Group>
  </Col>
  <Col className="ResourceFormCol">
  <Form.Group className="ResourceFormGrp" controlId="synopsis">
    <Form.Label className="ResourceFormLbl">Subject</Form.Label>
    <Form.Control
            className="ResourceFormCtl"
            onChange={handleFieldChange} 
            type="text" 
            placeholder="Enter Subject" />
  </Form.Group>
  </Col>
  <Col className="ResourceFormCol">
  <Form.Group className="ResourceFormGrp" controlId="url">
    <Form.Label className="ResourceFormLbl">Resource Link</Form.Label>
    <Form.Control 
            className="ResourceFormCtl"
            onChange={handleFieldChange}
            type="text" 
            placeholder="Enter Resource link" />
  </Form.Group>
  </Col>
  </Row>
  <Button 
            className="ResourceFormButton" 
            variant="custom" 
            onClick={ConstructNewsResource}
            type="submit"
  >
    Submit
  </Button>
</Form>

    )
}

export default ResourceForm;