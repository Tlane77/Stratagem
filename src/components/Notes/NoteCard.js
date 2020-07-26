import React from "react";
import { Card, Button } from "reactstrap";
import APIManager from "../Modules/APIManager";

const NoteCard = (props) => {
  const handleNoteDelete = (evt) => {
    APIManager.Delete("Notes", evt.target.id)
      .then(() => {
        APIManager.GetUsersNotes("Notes", sessionStorage.activeUserID);
      })
      .then((response) => {
        props.setNotes(response);
      });
  };

  return (
    <>
      <Card>
        <h3>{props.Note.user.userName}</h3>
        <Button
          className="delete-Note-btn"
          variant="custom"
          id={props.Note.id}
          onClick={handleNoteDelete}
          type="submit"
        >
          X
        </Button>
      </Card>
    </>
  );
};

export { NoteCard };
