import React, { useState, useEffect } from "react";
import ResourceManager from "../Modules/ResourceManager";
import "./ResourceEditForm.css";
import { Form, Button ,Col} from "react-bootstrap";



const ResourceEditForm = (props) => {
  const [resource, setResource] = useState({
    title: "",
    subjectId: parseInt(sessionStorage.resourceSubjectId),
    synopsis: "",
    url:"",
    date: "",
    user: sessionStorage.activeUser,
    userId: parseInt(sessionStorage.activeUserId)

   
  });
//   const [notes, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...resource };
    stateToChange[evt.target.id] = evt.target.value;
    setResource(stateToChange);
  };

  const updateExistingResource = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedResource = {
      id: props.match.params.resourceId,
      title: resource.title,
      subjectId: parseInt(resource.subjectId),
      synopsis: resource.synopsis,
      url: resource.url,
      date: resource.date,
      user: sessionStorage.activeUser,
      userId: parseInt(sessionStorage.activeUserId)
      
    };
    

    ResourceManager.Update("resources", editedResource).then(() =>
      props.history.push("/resources")
    );
  };

  useEffect(() => {
    ResourceManager.get("resources", props.match.params.resourceId)
      .then(resource => {
        setResource(resource)
        setIsLoading(false)
    })
  }, [])

  // Reference Code Below

  //  <Form className="ResourceFormContainer">
  //     {/* <Row className="ResourceFormRow"> */}
  //     <Col className="ResourceFormCol">
  //       <Form.Group className="ResourceFormGrp" controlId="title">
  //         <Form.Label className="ResourceFormLbl">Title</Form.Label>
  //         <Form.Control
  //           className="ResourceFormCtl"
  //           type="text"
  //           onChange={handleFieldChange}
  //           placeholder="Enter Title"
  //         />

    

  return (
    <>
      <div>
        <h1 className="dashboard-title">Stratagem Developer Resources</h1>
        <br></br>
        <img
          className="resourceEditFormLogo"
          src={require("../Images/stratagembanner.jpg")}
          alt="imgLogo"
        ></img>
      </div>
      <Form className="ResourceEditFormContainer">
        <Col className="ResourceEditFormCol">
          <Form.Group className="ResourceEditFormGrp" controlId="title">
            <Form.Label className="ResourceEditFormLbl">Title</Form.Label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={resource.title}
            />
            <Form.Group
              className="ResourceEditFormGrp"
              controlId="subject"
            ></Form.Group>
            <Form.Label className="ResourceEditFormLbl">Subject</Form.Label>
            <select
              required
              className="form-control"
              onChange={handleFieldChange}
              id="subjectId"
              value={parseInt(resource.subjectId)}
            >
              <option value="1">Choose</option>
              <option value="2">Javascript</option>
              <option value="3">PHP</option>
              <option value="4">C#</option>
              <option value="5">Ruby</option>
              <option value="6">REACT</option>
              <option value="7">CRUD</option>
              <option value="8">Python</option>
              <option value="9">Quantum</option>
              <option value="10">Java</option>
            </select>
            <Form.Group
              className="ResourceEditFormGrp"
              controlId="memo"
            ></Form.Group>
            <Form.Label className="ResourceEditFormLbl">Memo</Form.Label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={resource.synopsis}
            />
            <Form.Group
              className="ResourceEditFormGrp"
              controlId="url"
            ></Form.Group>
            <Form.Label className="ResourceEditFormLbl">URL</Form.Label>
            {/* <label htmlFor="Url">url</label> */}
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={resource.url}
            />
            <Form.Group
              className="ResourceEditFormGrp"
              controlId="date"
            ></Form.Group>
            <Form.Label className="ResourceEditFormLbl">Date</Form.Label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={resource.date}
            />
          </Form.Group>

          {/* <div className="resourceSubmitButton">
            <Button
              className="ResourceFormButton"
              variant="custom"
              type="button"
              disabled={isLoading}
              onClick={constructNewResource}
            >
              Submit
            </Button>
          </div> */}

          <div className="resourceEditSubmitButton">
            <Button
              className="ResourceEditFormButton"
              type="button"
              disabled={isLoading}
              onClick={updateExistingResource}
              className="btn btn-primary"
            >
              Submit
            </Button>
          </div>
        </Col>
      </Form>
    </>
  );
};

export default ResourceEditForm;
