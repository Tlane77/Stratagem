import React, { useState, } from "react";
import { Form, Button, Col, } from "react-bootstrap";
import NoteManager from "../Modules/NoteManager";
import NavBar from "../Navbar/Navbar"
import "./NoteForm.css";

const NoteForm = (props) => {
    const [note, setNote] = useState({ userId: parseInt(sessionStorage.activeUserId), resourceId: parseInt(sessionStorage.noteResourceId), note: "", date: "" })
    const [isLoading, setIsLoading]=useState(false)
    const handleFieldChange = event => {
        const stateToChange = { ...note }
        stateToChange[event.target.id] = event.target.value
        setNote(stateToChange)
    
    }
const constructNewNote = () => {
    if (note.note === "" || note.date === "") {
            alert("Please Enter Note")
    } else {
        setIsLoading(true)
        NoteManager.post(note)
         props.history.push("/resources")
        }
}
  return (
    <>
      <NavBar {...props} clearUser={props.clearUser} />
      <div>
        <h1 className="dashboard-title">Stratagem Developer Resource Notes</h1>
        <br></br>
        <img
          className="resourceEditFormLogo"
          src={require("../Images/stratagembanner.jpg")}
          alt="imgLogo"
        ></img>
        <img
          className="resourceEditFormLogo"
          src={require("../Images/StratagemMockup.png")}
          alt="imgLogo"
        ></img>
      </div>

      <Form className="newNoteForm">
        <Col className="NoteFormCol">
          <Form.Group className="newNoteGroup" controlId="note">
            <Form.Control
              className="newNoteControl"
              type="text"
              placeholder="Enter Note Here"
              onChange={handleFieldChange}
            />
          </Form.Group>
        </Col>

        <Col className="NoteFormCol">
          <Form.Group className="newNoteGroup" controlId="date">
            <Form.Control
              className="newNoteControl"
              type="date"
              placeholder="Enter Date"
              onChange={handleFieldChange}
            />
          </Form.Group>
        </Col>
        <div className="noteSubmitButton">
          <Button
            className="newNoteButton"
            variant="custom"
            onClick={constructNewNote}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export default NoteForm


