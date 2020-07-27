import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import { NewNote } from "./NoteModal";
import { NoteCard } from "./NoteCard";
import "../Dashboard/dashboard.css";
import "./NoteList.css";

const NoteList = (props) => {
  const [Notes, setNotes] = useState([]);

  const noteUpdate = () => {
    APIManager.GetUsersNotes("Notes").then((response) => {
      console.log(response);
      setNotes(response);
      props.newNotes(response);
    });
  }; 

  useEffect(() => {
    noteUpdate();
  }, []);

  return (
    <div className="note-container">
      <h2>Note List</h2>
      <NewNote NoteUpdate={noteUpdate} newNotes={props.newNotes} />

      <div className="Note-card-container">
        {Notes.map((Note) => (
          <NoteCard Note={Note} setNotes={noteUpdate} {...props} />
        ))}
      </div>
    </div>
  );
};
export default NoteList;
