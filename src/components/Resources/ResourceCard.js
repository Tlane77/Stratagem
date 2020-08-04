import React from "react";
import "./ResourceCard.css";
import { Link } from "react-router-dom";
import NoteList from "../Notes/NoteList";
import { Button} from "react-bootstrap";


import { ExternalLink } from "react-external-link";



const ResourceCard = (props) => {
const handleOnClick = (event) => {
  sessionStorage.setItem("noteResourceId", event.target.id);
};

const handleOnClickEdit = event => {
  sessionStorage.setItem("resourceId", props.resource.subject.id);
  props.history.push(`resources/${props.resource.id}/edit`);
};

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Title:{" "}
          <span className="card-resourceName">{props.resource.title}</span>
        </h3>
        <p>
          Subject:{" "}
          <span className="card-resourceName">
            {props.resource.subject.subjectName}
          </span>
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
        <Button
          type="button"
          onClick={
            handleOnClickEdit
          }
        >
          Edit
        </Button>

        <Button
          type="button"
          onClick={() => props.deleteResource(props.resource.id)}
        >
          Delete
        </Button>

        <NoteList
          update={props.update}
          resource={props.resource}
          refresh={props.refresh}
          {...props}
        />

        <section className="section-content">
          <Link to={`notes/new`}>
            <Button
              type="button"
              className="btn"
              id={props.resource.id}
              onClick={handleOnClick}
            >
              ADD NOTE
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ResourceCard;
