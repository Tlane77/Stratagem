import React, { useState, useEffect } from "react";
import ResourceManager from "../Modules/ResourceManager";
import ResourceCard from "./ResourceCard";
import "./ResourceList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";

const ResourceList = (props) => {
  // The initial state is an empty array
  const [resources, setResources] = useState([]);

  const getResources = () => {
    // After the data comes back from the API, we
    //  use the setResources function to update state
    return ResourceManager.getAllResources().then((resourcesFromAPI) => {
      setResources(resourcesFromAPI);
    });
  };
  const deleteResource = (id) => {
    ResourceManager.delete(id).then(() =>
      ResourceManager.getAllResources().then(setResources)
    );
  };
///Adding a Search Funtion to Resource Card
  
   const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //   setLoading(true);
  //   .get("(`/resources/${props.resource.subjectId}/add`)")
  //     .then(res => {
  //       setSubjects(res.data);
  //       setLoading(false);

  //     })
  //     .catch(err => {
  //       console.log(err);
  // })

  // }, [])
  


  // got the Resources from the API on the component's first render
  useEffect(() => {
    console.log("history", props.history);
    getResources();
  }, [props.history]);

  // Finally we use map() to "loop over" the Resources array to show a list of Resource cards
  return (
    <>
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
      <div class="searchSub">
        <input type="text" placeholder="Search.."></input>
      </div>
      

     
      <div className="container-cards">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            deleteResource={deleteResource}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default withRouter(ResourceList);
