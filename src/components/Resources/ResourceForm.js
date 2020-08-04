import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ResourceForm.css";
import ResourceManager from "../Modules/ResourceManager";
import { withRouter } from "react-router-dom";

const ResourceForm = (props) => {
  const [resource, setResource] = useState({
    userId: parseInt(sessionStorage.activeUserId),
    title: "",
    subjectId: "",
    synopsis: "",
    url: "",
    date: "",
    user: sessionStorage.activeUser,
  });
  const [isLoading, setIsLoading] = useState("");

  const handleFieldChange = (evt) => {
    const stateToChange = { ...resource };
    stateToChange[evt.target.id] = evt.target.value;
    setResource(stateToChange);
  };
  /*  Local method for validation, set loadingStatus, create resource      object, invoke the ResourceManager post method, and redirect to the full resource list
   */
  const constructNewResource = (evt) => {
    evt.preventDefault();
    if (
      resource.title === "" ||
      resource.subjectId === "" ||
      resource.synopsis === "" ||
      resource.url === "" ||
      resource.date === "" 
      
    ) {
      window.alert("Please Fill in Fields");
    } else {
      if (resource.url.substring(0, 8) !== "https://") {
        // const stateToChange = { ...resource };
        resource.url = `https://${resource.url}`;
        // setResource(stateToChange);
      }
      setIsLoading(true);
      // Create the resource and redirect user to resource list
      ResourceManager.post(resource).then(() =>
        props.history.push("/Resources")
      );
    }
  };

  return (
    <Form className="ResourceFormContainer">
      {/* <Row className="ResourceFormRow"> */}
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
          <Form.Group className="ResourceFormGrp" controlId="subjectId">
            <label htmlFor="subject">Subject</label>
            <select
              required
              className="form-control"
              onChange={handleFieldChange}
              id="subjectId"
              value={resource.subjectId}
            >
              <option value="1">Java</option>
              <option value="2">Javascript</option>
              <option value="3">PHP</option>
              <option value="4">C#</option>
              <option value="5">Ruby</option>
            </select>
          </Form.Group>
        </Col>
        <Col className="ResourceFormCol">
          <Form.Group className="ResourceFormGrp" controlId="synopsis">
            <Form.Label className="ResourceFormLbl">Synopsis</Form.Label>
            <Form.Control
              className="ResourceFormCtl"
              onChange={handleFieldChange}
              type="text"
              placeholder="Enter Thoughts"
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
              placeholder="Enter Date"
            />
          </Form.Group>
        </Col>
        {/* <Col className="ResourceFormCol">
          <Form.Group className="ResourceFormGrp" controlId="noteId">
            <Form.Label className="ResourceFormLbl">Notes</Form.Label>
            <Form.Control
              className="ResourceFormCtl"
              onChange={handleFieldChange}
              type="text"
              placeholder="Notes"
            />
          </Form.Group>
        </Col> */}
      {/* </Row> */}
      <div className="resourceSubmitButton">
      <Button
        className="ResourceFormButton"
        variant="custom"
        type="button"
        disabled={isLoading}
        onClick={constructNewResource}
      >
        Submit
      </Button>
    </div>
    </Form>
  );
};

export default withRouter(ResourceForm);
