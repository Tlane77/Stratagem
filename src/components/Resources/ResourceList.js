import React, { useState, useEffect } from "react";
// import { Container, Row, } from "react-bootstrap";
import ResourceManager from "../Modules/ResourceManager";
import ResourceCard from "./ResourceCard"
// import ResourceForm from "./ResourceForm"

// import ResourceForm from "../Resources/ResourceForm";
import "./ResourceList.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import NoteList from "../Notes/NoteList"


const ResourceList = (props) => {
  // The initial state is an empty array
  const [resources, setResources] = useState([]);

  const getResources = () => {
    // After the data comes back from the API, we
    //  use the setResources function to update state
    return ResourceManager.GetAllResources().then(resourcesFromAPI => {
      setResources(resourcesFromAPI);
    });
  };
  const deleteResource = (id) => {
    ResourceManager.delete(id).then(() =>
      ResourceManager.GetAllResources().then(setResources)
    );
  };


  // got the Resources from the API on the component's first render
  useEffect(() => {
    getResources();
  }, []);
  
  // Finally we use map() to "loop over" the Resources array to show a list of Resource cards
  return (
    <div className="container-cards">
      {/* //add this button above your display of Resource cards */}
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/resources/new");
          }}
        >
          ADD Resource
        </button>
      </section>
       {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          deleteResource={deleteResource}
          {...props}
        />
      ))} 
    </div>
  );
};
export default ResourceList;