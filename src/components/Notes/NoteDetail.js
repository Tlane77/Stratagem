import React, { useState, useEffect } from "react";
import NoteManager from "../Modules/NoteManager";
import "./NoteDetail.css";

const NoteDetail = (props) => {
  const [note, setNote] = useState({ note: "", date: "" });

  useEffect(() => {
    //get(id) from NoteManager and hang on to the data; put it into state
    NoteManager.get(props.resourceId).then((note) => {
      setNote({
        note: note.note,
        date: note.date,
      });
    });
  }, [props.resourceId]);

  return (
    <div className="card">
      <div className="card-content">
       
        <h3>
          Note: <span style={{ color: "darkslategrey" }}>{note.name}</span>
        </h3>
        <p>Date: {note.date}</p>
      </div>
    </div>
  );
};

export default NoteDetail;
