import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import { HandleNoteModal, NewNote } from "./NoteModal";
import { NoteCard } from "./NoteCard";
import "../Dashboard/dashboard.css";
import "./NoteList.css";

const NoteList = (props) => {
  const [Notes, setNotes] = useState([]);

  const NoteUpdate = () => {
    APIManager.GetUsersNotes("Notes").then((response) => {
      console.log(response);
      setNotes(response);
      props.newNotes(response);
    });
  };

  useEffect(() => {
    NoteUpdate();
  }, []);

  return (
    <div className="Note-container">
      <h2>Note List</h2>
      <NewNote NoteUpdate={NoteUpdate} newNotes={props.newNotes} />

      <div className="Note-card-container">
        {Notes.map((Note) => (
          <NoteCard Note={Note} setNotes={NoteUpdate} {...props} />
        ))}
      </div>
    </div>
  );
};
export default NoteList;
