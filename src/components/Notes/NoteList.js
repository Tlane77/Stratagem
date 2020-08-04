import React, { useState, useEffect } from "react";
import NoteManager from "../Modules/NoteManager";
import  NoteCard  from "./NoteCard";
import "../Dashboard/dashboard.css";
import "./NoteList.css";

const NoteList = (props) => {
  const [notes, setNotes] = useState([]);

  const noteUpdate = () => {
    NoteManager.getWithResources(props.resource.id).then(resource => {
      setNotes(resource)
    })
    
  }; 

  useEffect(() => {
    noteUpdate();
  }, [props.update]);

  

    return (
      <>
        {/* //add this button above your display of Note cards */}
     

        <div className="note-container">
          <h2>Notes</h2>
      
          <div className="Note-card-container">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} refresh={props.refresh}{...props} />
            ))}
          </div>
        </div>
      </>
  
    );
 

};
export default NoteList;
