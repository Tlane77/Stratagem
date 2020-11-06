import React, { useState } from "react";
import NoteManager from "../Modules/NoteManager";
import "./NoteForm.css";

const NoteEditForm = (props) => {
  const [resource, setResource] = useState({
    note: "",
    resourceId: "",
    date: "",
  });
  const [note, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...note };
    stateToChange[evt.target.id] = evt.target.value;
    setResource(stateToChange);
  };

  const updateExistingNote = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedNote = {
      id: props.match.params.noteId,
      note: note.note,
      resourceId: note.resourceId,
      date: note.date,
    };

    NoteManager.update(editedNote).then(() =>
      props.history.push("/notes")
    );
  };

    // useEffect(() => {
    //   ResourceManager.get("resources", props.match.params.useResourceId).then((resource) => {
    //     NoteManager.getAll().then((notes) => {
    //       console.log("note response", notes);
    //       setNote(note);
    //       setResource(resource);
    //       setIsLoading(false);
    //     });
    //   });
    // }, [props.match.params.useResourceId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="form-grid">
            <label htmlFor="note"> ADD Note</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={note.note}
            />
            <label htmlFor="resourceId">Resource</label>
            <select
              required
              className="form-control"
              onChange={handleFieldChange}
              id="subjectId"
              value={note.resourceId}
            >
              <option value="1">Java</option>
              <option value="2">Javascript</option>
              <option value="3">PHP</option>
              <option value="4">C#</option>
              <option value="5">Ruby</option>
              <option value="6">REACT</option>
              <option value="7">CRUD</option>
            </select>

            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={resource.date}
            />
            {/* //Does this div go here or below */}
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingNote}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default NoteEditForm;
