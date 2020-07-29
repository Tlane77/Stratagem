import React, { useState } from 'react';
import { Form, Button, Row, Col, } from "react-bootstrap";
import "./ResourceForm.css";
import ResourceManager from "../Modules/ResourceManager"
import { withRouter } from "react-router-dom"

const ResourceForm = props => {
    const [resource, setResource] = useState({ userId:parseInt(sessionStorage.activeUserId), title:"", subject:"", synopsis:"", url:"", date: "", user: sessionStorage.activeUser})
  const [isLoading, setIsLoading] = useState("")

    const handleFieldChange = evt => {
        const stateToChange = { ...resource };
        stateToChange[evt.target.id] = evt.target.value;
        setResource(stateToChange)
    }
  /*  Local method for validation, set loadingStatus, create resource      object, invoke the ResourceManager post method, and redirect to the full resource list
  */
  const constructNewResource = evt => {
    evt.preventDefault();
    if (resource.title === "" || resource.subject === "" || resource.synopsis === "" || resource.url === "" || resource.date === "") {
      window.alert("Please Fill in Fields");
    
     
  } else {
      if (resource.url.substring(0, 8) !== "https://") {
    // const stateToChange = { ...resource };
    resource.url = `https://${resource.url}`
    // setResource(stateToChange);
  }
      setIsLoading(true);
      // Create the resource and redirect user to resource list
      ResourceManager.Post(resource)
        .then(() => props.history.push("/Resources"));
  
    }
  };

    
    

    return (
      <Form className="ResourceFormContainer">
        <Row className="ResourceFormRow">
          <Col className="ResourceFormCol">
            <Form.Group className="ResourceFormGrp" controlId="title">
              <Form.Label className="ResourceFormLbl">Title</Form.Label>
              <Form.Control
                className="ResourceFormCtl"
                type="text"
                onChange={handleFieldChange}
                placeholder="Enter Title"
              />
              <label htmlFor="title">Title</label>
            </Form.Group>
          </Col>
          <Col className="ResourceFormCol">
            <Form.Group className="ResourceFormGrp" controlId="subject">
              <Form.Label className="ResourceFormLbl">Subject</Form.Label>
              <Form.Control
                className="ResourceFormCtl"
                onChange={handleFieldChange}
                type="text"
                placeholder="Enter Subject"
              />
            </Form.Group>
          </Col>
          <Col className="ResourceFormCol">
            <Form.Group className="ResourceFormGrp" controlId="synopsis">
              <Form.Label className="ResourceFormLbl">Note</Form.Label>
              <Form.Control
                className="ResourceFormCtl"
                onChange={handleFieldChange}
                type="text"
                placeholder="Enter Notes"
              />
            </Form.Group>
          </Col>
          <Col className="ResourceFormCol">
            <Form.Group className="ResourceFormGrp" controlId="url">
              <Form.Label className="ResourceFormLbl">Resource Link</Form.Label>
              <Form.Control
                className="ResourceFormCtl"
                onChange={handleFieldChange}
                type="url"
                placeholder="Enter Resource link"
              />
            </Form.Group>
          </Col>
          <Col className="ResourceFormCol">
            <Form.Group className="ResourceFormGrp" controlId="date">
              <Form.Label className="ResourceFormLbl">Date</Form.Label>
              <Form.Control
                className="ResourceFormCtl"
                onChange={handleFieldChange}
                type="date"
                placeholder="Enter Resource link"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="ResourceFormButton"
          variant="custom"
          type="button"
          disabled={isLoading}
          onClick={constructNewResource}
        >
          Submit
        </Button>
      </Form>
    );
}

export default withRouter(ResourceForm);