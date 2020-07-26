import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import { Button, Modal, Form, FormControl } from "react-bootstrap";

import { NewNoteCard } from "./NewNoteCard";
import "./NoteModal.css";
const HandleNoteModal = (props) => {
  const [newNote, setNewNote] = useState([]);
  const [notes, setNotes] = useState([]);
  const [filterNotes, setFilterNotes] = useState([]);

  const handleSearchChange = (evt) => {
    let searchEvent = evt.target.value;
    searchEvent = searchEvent.toUpperCase();
    let filteredNotes = notes.filter((note) =>
      note.userName.toUpperCase().includes(searchEvent) ? true : false
    );
    let finalFilter = filteredNotes.filter((note) => {
      let filterCheck = true;
      newNote.forEach((person) => {
        if (note.userName === person.user.userName) {
          filterCheck = false;
        } else if (note.userName === sessionStorage.activeUser) {
          filterCheck = false;
        }
      });
      return filterCheck;
    });

    setFilterNotes(finalFilter);
  };
  const clearSearch = () => {
    document.querySelector(".mr-sm-2").value = "";
  };
  const userNotes = () => {
    APIManager.GetUserNotes("notes")
      .then((response) => setNewNote(response))
      .then(() => {});
  };
  useEffect(() => {
    APIManager.GetAll("users").then((response) => setNotes(response));
    userNotes();
  }, []);

  return (
    <Modal
      className="ModalContainer"
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="new-friends">New Notes</h4>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2  NoteSearchBar"
            onChange={handleSearchChange}
            onClick={userNotes}
          />
        </Form>
        <div className="new-Notes">
          {filterNotes.map((Note) => (
            <NewNoteCard
              Note={Note}
              newNotes={props.newNotes}
              setNotes={setNotes}
              NoteUpdate={props.NoteUpdate}
              clear={clearSearch}
              setFilterNotes={setFilterNotes}
              setNewNotes={setNewNote}
              {...props}
            />
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modalCloseButton"
          variant="custom"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const NewNote = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="custom" onClick={() => setModalShow(true)}>
        Add New Note
      </Button>

      <HandleNoteModal
        newNotes={props.newNotes}
        show={modalShow}
        onHide={() => setModalShow(false)}
        NoteUpdate={props.NoteUpdate}
      />
    </>
  );
};
export { HandleNoteModal, NewNote };