import React from "react";
import { withRouter } from "react-router-dom";
import {  NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Navbar.css";


const NavBar = (props) => {
  const handleLogout = () => {
    window.sessionStorage.clear()
      props.history.push("/Login")
    ;
  }
  return (
    <header>
      <nav className="navBar">
        <ul className="container">
          {/* <Image
            className="logoNavbarLeft"
            src={require("../Images/logo6.png")}
          /> */}
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
              Stratagem
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
              exact
              to="/Login"
              onClick={handleLogout}
            >
              {" "}
              Logout{" "}
            </NavLink>
          </li>
          {/* <Image className="logoNavbar" src={require("../Images/logo3.png")} /> */}

        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
