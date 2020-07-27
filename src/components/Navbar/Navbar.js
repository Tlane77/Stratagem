import React from "react";
import { withRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Navbar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
  };
  return (
    <header>
      <nav className="navBar">
        <ul className="container">
          <Image
            className="logoNavbarLeft"src={require("../Images/logo3.png")}/>
          <li>
            <NavLink
              className="nav-link"
              exact
              to="/Dashboard"
              disabled
              activeStyle={{
                color: "#66b3ff",
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/Resources"
              disabled
              activeStyle={{
                color: "#66b3ff",
              }}
            >
              Resources
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav-link"
              to="/Notes"
              disabled
              activeStyle={{
                color: "#66b3ff",
              }}
            >
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/Subjects"
              disabled
              activeStyle={{
                color: "#66b3ff",
              }}
            >
              Subjects
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" exact to="/" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </NavLink>
          </li>
          <Image className="logoNavbar" src={require("../Images/logo1.png")} />
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
