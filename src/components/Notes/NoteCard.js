import React from "react";
import { Card, Button } from "reactstrap";
import NoteManager from "../Modules/NoteManager";


const NoteCard = (props) => {
  
  const handleDelete = () => {
    NoteManager.delete(props.note.id).then((response) => {props.refresh(response)})
  }

  return (
    <>
      <Card>
        <h3>{props.note.note}</h3>
        <p>
          {props.note.date}
        </p>
        <Button className="note-delete-button"variant="custom"onClick={handleDelete}>
          Delete This Note
        </Button>
      </Card>
    </>
  );
};

export default NoteCard;
