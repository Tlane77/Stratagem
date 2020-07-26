import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./ResourceCard.css";

const ResourceCard = (props) => {
  return (
    <Container className="ResourceCardContainer">
      <Card className="ResourceCard">
        <Card.Body className="ResourceCardBody">
          <Card.Title className="ResourceTitle">{props.news.title}</Card.Title>
          <Card.Text className="ResourceSynopsis">
            {props.news.user}
            <br />
            {props.news.synopsis}
          </Card.Text>
          <Card.Link
            target="_blank"
            className="ResourceLink"
            href={props.news.url}
          >
            {props.news.url}
          </Card.Link>
          <br />
          {props.news.userId === parseInt(sessionStorage.activeUserID) ? (
            <Button
              className="ResourceDeleteButton"
              variant="custom"
              onClick={() => props.deleteResource(props.news.id)}
            >
              Remove Resource
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResourceCard;
