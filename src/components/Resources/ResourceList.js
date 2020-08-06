import React, { useState, useEffect } from "react";
import ResourceManager from "../Modules/ResourceManager";
import ResourceCard from "./ResourceCard";
import "./ResourceList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";

const ResourceList = (props) => {

  // let clearUser = props.clearUser;
  // The initial state is an empty array
  const [resources, setResources] = useState([]);

  const [refresh, setRefresh] = useState("")
const [search, setSearch] = useState("");
const [filteredResources, setFilteredResources] = useState([]);

  const getResources = () => {
    // After the data comes back from the API, we
    //  use the setResources function to update state
    return ResourceManager.getUsersResources("resources").then((resourcesFromAPI) => {
      setResources(resourcesFromAPI);
    });
  };
  const deleteResource = (id) => {
    ResourceManager.delete(id).then(() =>
      ResourceManager.getUsersResources("resources").then((response) => {
        console.log(response)
        setResources(response)
      })
   
    );
  };

  // got the Resources from the API on the component's first render
  useEffect(() => {
    
    getResources();
  }, [refresh]);

  useEffect(() => {
    setFilteredResources(
      resources.filter((resource) =>
        resource.subject.subjectName
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search,resources]);

  // Finally we use map() to "loop over" the Resources array to show a list of Resource cards
  return (
    <>
      <NavBar {...props} clearUser={props.clearUser} />
      <div>
        {" "}
        <h1 className="dashboard-title">Stratagem Developer Resources</h1>
        <br></br>
         <img
          className="resourceListLogo"
          src={require("../Images/resourceListBanner.png")}
          alt="imgbanner"
        ></img>
         
      </div>
      {/* //add this button above your display of Resource cards */}
      <section className="section-content">
        <Button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/resources/new");
          }}
        >
          ADD Resource
        </Button>
      </section>
      {/* <div className="searchSub">
        <input type="text" placeholder="Search.." value={search.field} id="field" onChange={handleFieldChange}></input>
      </div> */}
      <Form className="dashForm resourceListSearch">
        <FormControl
          className="dashControl"
          type="text"
          placeholder="Search Resources by Subject"
          onChange={(event) => setSearch(event.target.value)}
          // className="mr-sm-2"
        />
      </Form>

      <div className="container-cards">
        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            update={refresh}
            refresh={setRefresh}
            deleteResource={deleteResource}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default withRouter(ResourceList);
