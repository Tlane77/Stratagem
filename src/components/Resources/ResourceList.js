import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import APIManager from "../Modules/APIManager";
import ResourceCard from "../Resources/ResourceCard";
import ResourceForm from "../Resources/ResourceForm";
import "./ResourceList.css";

const ResourceList = (props) => {
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({
    userId: parseInt(sessionStorage.activeUserID),
    title: "",
    synopsis: "",
    url: "",
    date: Date.now(),
    user: sessionStorage.activeUser,
  });
  const getResources = () => {
    return APIManager.GetAllSort("Resources").then((resourcesFromAPI) => {
      setResources(resourcesFromAPI);
    });
  };

  const deleteResource = (id) => {
    APIManager.Delete("Resources", id).then(() =>
      APIManager.GetAllSort("Resources").then((response) => setResources(response))
    );
  };

  const clearInputs = () => {
     document.getElementById("title").value = "";
     document.getElementById("synopsis").value = "";
     document.getElementById("subject").value = "";
     document.getElementById("date").value = "";
     document.getElementById("url").value = "";
  };

  const ConstructNewResource = (resource) => {
    if (resource.title === "" || resource.synopsis === "" || resource.subject === "" ||resource.date === "" || resource.url === "") {
      alert("Please complete all fields.");
    } else {
      APIManager.Push("Resources", resource)
        .then(() => APIManager.GetAllSort("Resources"))
        .then(() => getResources());
      clearInputs();
    }
  };

  useEffect(() => {
    getResources();
  }, []);
  return (
    <Container className="ResourceListContainer">
      {/* Changeable dashboard in this  Col */}
      <Row className="resourcedashboard">
        <ResourceForm construct={ConstructNewResource} />
      </Row>
      <Row className="dashboardResourceCard">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            news={resource}
            deleteResource={deleteResource}
            {...props}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ResourceList;
