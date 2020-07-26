import React, { useEffect, useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "../Dashboard/dashboard.css";
// import NoteList from "../notes/NoteList";
import APIManager from "../Modules/APIManager";
import Navbar from "../Navbar/Navbar";
import NoteList from "../Notes/NoteList";
import ResourceList from "../Resources/ResourceList";
import Stratagem from "../Stratagem";


const Dashboard = (props) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    APIManager.GetUsersNotes("notes").then((response) => {
      console.log(response);
      APIManager.SortingByNote(response);
    });
  }, []);

  const refresh = (ref) => {
    setNotes(ref);
  };

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  if (props.subjects) {
    return (
      // User info and Navbar inside this Row
      <Container fluid className="dashboardContainer">
        <Row className="userAndNavRow">
          {/* User info in this Col */}
          <Col md={2} className="userCol">
            Welcome, {sessionStorage.activeUser}
            <Image
              className="Stratagem"
              src={require("../Images/logo3.png")}
              roundedCircle
            />
          </Col>

          <Col className="navbarCol">
            <Navbar clearUser={clearUser} {...props} />
          </Col>
        </Row>
        {/* // Notes list and changeable dashboard in this Row */}
        <Row className="notesAndDashboardRow">
          {/* Notes List in this Col */}
          <Col md={3} className="notesCol">
            <NoteList newNotes={refresh} {...props} />
          </Col>
          {/* Changeable dashboard in this  Col */}
          <Col>
            <Container className="dashboardCol">
              {/* <MessageList /> */}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  } else if (props.news) {
    return (
      // User info and Navbar inside this Row
      <Container fluid className="dashboardContainer">
        <Row className="userAndNavRow">
          {/* User info in this Col */}
          <Col md={2} className="userCol">
            {sessionStorage.activeUser}
            <Image
              className="Stratagem"
              src={require("../Images/logo3.png")}
              roundedCircle
            />
          </Col>

          <Col className="navbarCol">
            <Navbar clearUser={clearUser} {...props} />
          </Col>
        </Row>
        {/* // Notes list and changeable dashboard in this Row */}
        <Row className="notesAndDashboardRow">
          {/* Notes List in this Col */}
          <Col md={2} className="notesCol">
            <NoteList newNotes={refresh} {...props} />
          </Col>
          {/* Changeable dashboard in this  Col */}
          <Col>
            <Container className="dashboardCol">
              <NoteList />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  } else if (props.events) {
    return (
      // User info and Navbar inside this Row
      <Container fluid className="dashboardContainer">
        <Row className="userAndNavRow">
          {/* User info in this Col */}
          <Col md={2} className="userCol">
            {sessionStorage.activeUser}
            <Image
              className="Stratagem"
              src={require("../Images/logo3.png")}
              roundedCircle
            />
          </Col>

          <Col className="navbarCol">
            <Navbar clearUser={clearUser} {...props} />
          </Col>
        </Row>
        {/* // Notes list and changeable dashboard in this Row */}
        <Row className="notesAndDashboardRow">
          {/* Notes List in this Col */}
          <Col md={2} className="notesCol">
            <ResourceList newNotes={refresh} {...props} />
          </Col>
          {/* Changeable dashboard in this  Col */}
          <Col>
            <Container className="dashboardCol">
              {/* <MeetupList /> stretch goal*/}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  } else if (props.tasks) {
    return (
      // User info and Navbar inside this Row
      <Container fluid className="dashboardContainer">
        <Row className="userAndNavRow">
          {/* User info in this Col */}
          <Col md={2} className="userCol">
            {sessionStorage.activeUser}
            <Image
              className="Stratagem"
              src={require("../Images/logo3.png")}
              roundedCircle
            />
          </Col>

          <Col className="navbarCol">
            <Navbar clearUser={clearUser} {...props} />
          </Col>
        </Row>
        {/* // notes list and changeable dashboard in this Row */}
        <Row className="notesAndDashboardRow">
          <Image
            className="Stratagem"
            src={require("../Images/logo3.png")}
            roundedCircle
          />
          {/* Notes List in this Col */}
          <Col md={2} className="notesCol">
            <NoteList newNotes={refresh} {...props} />
          </Col>
          {/* Changeable dashboard in this  Col */}
          <Col>
            <Container className="dashboardCol">
              {/* <NoteList /> */}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Dashboard;
