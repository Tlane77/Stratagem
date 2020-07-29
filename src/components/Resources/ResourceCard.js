import React from "react";
import { Card } from "react-bootstrap";
import "./ResourceCard.css";
import { Link } from "react-router-dom";
import { CardLink } from "reactstrap";
import { ExternalLink } from "react-external-link";



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
        <p>Url:{" "} </p>
        <ExternalLink href={`${props.resource.url}`} />

        <p>
          Date: <span className="card-resourceName">{props.resource.date}</span>
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
        {/* <Link to={`/resources/${props.resource.id}`}>
          <button>Notes</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ResourceCard;