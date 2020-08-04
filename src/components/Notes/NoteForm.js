import React, { useState, } from "react";
import { Form, Button, Card } from "react-bootstrap";
import NoteManager from "../Modules/NoteManager";

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
        <div>
        <Form className="newNoteForm">
              
              <Form.Group className="newNoteGroup" controlId="note">
                <Form.Control className="newNoteControl"
                type="text" 
                placeholder="Enter Note Here"
                onChange={handleFieldChange}
                />
              </Form.Group>   
<Form.Group className="newNoteGroup" controlId="date">
                <Form.Control className="newNoteControl"
                type="date" 
                placeholder="Enter Date"
                onChange={handleFieldChange}
                />
              </Form.Group> 
              <Button 
                className="newNoteButton" 
                variant="custom" 
                onClick={constructNewNote}
                type="submit">
                Submit
              </Button>
              
        </Form> 
        </div>
    )
}

export default NoteForm


