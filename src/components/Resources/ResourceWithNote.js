import React, { useState, useEffect } from "react";
import NoteManager from "../../modules/NoteManager";
import ResourceCard from "./ResourceCard";

const ResourceWithNote = (props) => {
  const [note, setNote] = useState({});
  const [resources, setResources] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    NoteManager.getWithResources(props.match.params.resourceId).then(
      (APIResult) => {
        setNote(APIResult);
        setResources(APIResult.resources);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>Note: {note.note}</p>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} {...props} />
      ))}
    </div>
  );
};

export default ResourceWithNote;
