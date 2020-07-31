import React from "react";
import "./ResourceCard.css";
import { Link } from "react-router-dom";

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
          Synopsis:{" "}
          <span className="card-resourceName">{props.resource.synopsis}</span>
        </p>
        <p>
          Url:
          <ExternalLink href={`${props.resource.url}`} />
        </p>
        <p>
          Date: <span className="card-resourceName">{props.resource.date}</span>
        </p>
        {/* <p>
          Note:{" "}
          <span className="card-resourceName">{props.resource.resourceId}</span>
        </p> */}
        {/* //add this button above your display of Resource cards */}
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.history.push("/notes/new");
            }}
          >
            ADD NOTE
          </button>
        </section>
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
          Delete
        </button>
        {/* <Link to={`/resources/${props.resource.id}`}>
          <button>Notes</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ResourceCard;
