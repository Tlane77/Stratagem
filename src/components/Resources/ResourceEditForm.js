import React, { useState, useEffect } from "react";
import ResourceManager from "../../Modules/ResourceManager";
import "./ResourceForm.css";
import NoteManager from "../../Modules/NoteManager";


const ResourceEditForm = (props) => {
  const [resource, setResource] = useState({
    title: "",
    subject: "",
    synopsis: "",
    date: "",
    noteId: "",
  });
  const [notes, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...resource };
    stateToChange[evt.target.id] = evt.target.value;
    setResource(stateToChange);
  };

  const updateExistingResource = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedResource = {
      id: props.match.params.animalId,
      title: resource.title,
      subject: resource.subject,
      synopsis: resource.synopsis,
      date: resource.date,
      noteId: resource.noteId,
    };

    ResourceManager.update(editedResource).then(() =>
      props.history.push("/resources")
    );
  };

  useEffect(() => {
    ResourceManager.get(props.match.params.resourceId).then((resource) => {
      NoteManager.getAll().then((notes) => {
        console.log("note response", notes);
        setNote(notes);
        setResource(resource);
        setIsLoading(false);
      });
    });
  }, [props.match.params.resourceId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="form-grid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={resource.name}
            />
            <label htmlFor="title">Resource Title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={resource.title}
            />
            <label htmlFor="Synopsis">Details</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={resource.synopsis}
            />
            <label htmlFor="Subject">Subject</label>
          </div>

          <select
            className="form-control"
            id="noteId"
            value={notes.noteId}
            onChange={handleFieldChange}
          >
            {notes.map((note) => (
              <option key={note.id} value={note.id}>
                {notes.id}
              </option>
            ))}
          </select>
          <label htmlFor="noteId">Note</label>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingResource}
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

export default ResourceEditForm;
