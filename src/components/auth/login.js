import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../auth/login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ userId: 0 });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    APIManager.getAll("users").then((response) => {
      setUsers(response);
    });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const userNameInputValue = document.getElementById("userName").value;
    const userPassword = document.getElementById("password").value;
    let userNameCheck = false;
    let passwordCheck = false;

    users.forEach((user) => {
      if (user.userName === userNameInputValue) {
        userNameCheck = true;
        if (user.password === userPassword) {
          passwordCheck = true;
          credentials.userId = user.id;
          props.setUser(credentials);
          props.history.push("/Dashboard");
        }
      }
    });
    if (userNameCheck === true) {
      if (passwordCheck === false) {
        return alert("Password is incorrect.");
      }
    } else {
      return alert("Username is incorrect");
    }
  };
  const handleFieldChange = (event) => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
  };

  return (
    <div className="loginContainer">
      <Card className="loginCard">
        <Card.Body>
          <Card.Img
            className="loginLogo"
            src={require("../Images/logo.png")}
            alt="imgLogo"
          />
          <Card.Title className="loginWelcome">Welcome to Stratagem</Card.Title>
          <Card.Subtitle className="loginWelcomeSub">
            Design Your Developer Resource Collection.
          </Card.Subtitle>

          <Form onSubmit={handleLogin}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="loginLabel">Username</Form.Label>
                  <Form.Control
                    className="loginForm"
                    onChange={handleFieldChange}
                    type="text"
                    id="userName"
                    placeholder="Enter Username"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="loginLabel">Password</Form.Label>
                  <Form.Control
                    className="loginForm"
                    onChange={handleFieldChange}
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button className="loginButton" variant="custom" type="submit">
                  Login
                </Button>
              </Col>
              <Col>
                <Button
                  className="registerButton"
                  variant="custom"
                  onClick={() => props.history.push("/Registration")}
                  type="submit"
                >
                  Register New Account
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
