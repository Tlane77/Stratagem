import React, { useEffect, useState } from "react";
// import { Row, Col, Container, Image } from "react-bootstrap";
import "../Dashboard/dashboard.css";
// import NoteList from "../notes/NoteList";
import APIManager from "../Modules/APIManager";
import Navbar from "../Navbar/Navbar";
import NoteList from "../Notes/NoteList";
// import ResourceList from "../Resources/ResourceList";
// // import Stratagem from "../Stratagem";


const Dashboard = (props) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    APIManager.GetUsersNotes("notes").then((response) => {
      console.log(response);
      APIManager.SortingByNote(response);
    });
  }, []);

  const refresh = (ref) => {
    setNotes(ref);
  };

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <div>
 
      <Navbar />
        
  
      </div>
  )
};

export default Dashboard;
