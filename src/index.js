import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Stratagem from "./components/Stratagem";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <Router>
    <Stratagem />
  </Router>,
  document.getElementById("root")
);

