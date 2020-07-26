import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import APIManager from "../Modules/APIManager";


const NewNoteCard = (props) => {
  const [newNote, setNewNote] = useState({
    userId: 0,
    activeUserId: parseInt(sessionStorage.activeUserID),
  });
  let update = props.NoteUpdate;
  const handleNoteAdd = (evt) => {
    newNote.userId = parseInt(evt.target.id);
    APIManager.Push("Notes", newNote).then(() => {
      APIManager.GetAll("users")
        .then((response) => props.setNotes(response))
        .then(() => {
          APIManager.GetUsersNotes("Notes")
            .then((response) => props.setNewNotes(response))
            .then(() => props.setFilterNotes([]))
            .then(() => update())
            .then(() => props.clear)
            .then(() => props.newNotes);
        });
    });
  };

  if (sessionStorage.activeUserID !== props.Note.userName) {
    return (
      <>
        <Card>
          <h3>{props.Note.userName}</h3>
          <Button
            className="add-Note -btn"
            variant="custom"
            id={props.Note.id}
            onChange="disabled"
            onClick={handleNoteAdd}
            type="submit"
          >
            Add Note
          </Button>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card>
          <h3>{props.Note.userName}</h3>
        </Card>
      </>
    );
  }
};

export { NewNoteCard };
