import React from "react";
// import { Container, Card, Button } from "react-bootstrap";
import "./ResourceCard.css";
import { Link } from "react-router-dom";



const ResourceCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Title:{" "}
          <span className="card-resourceName">{props.resource.title}</span>
        </h3>
        <p>
          Subject:{" "}
          <span className="card-resourceName">{props.resource.subject}</span>
        </p>
        <p>
          Notes:{" "}
          <span className="card-resourceName">{props.resource.synopsis}</span>
        </p>
        <p>
          Date:{" "}
          <span className="card-resourceName">{props.resource.timestamp}</span>
        </p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/resources/${props.resource.id}/edit`)
          }
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => props.deleteResource(props.resource.id)}
        >
          Discharge
        </button>
        <Link to={`/resources/${props.resource.id}`}>
          <button>Notes</button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;