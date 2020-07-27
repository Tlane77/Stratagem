import React, { useState, useEffect } from "react";
import ApplicationViews from "../components/ApplicationViews";
import APIManager from "../components/Modules/APIManager";
import "bootstrap/dist/css/bootstrap.min.css";

const Stratagem = (props) => {
  useEffect(() => {
    APIManager.GetUsersNotes("notes").then((response) => {
      console.log(response);
      APIManager.SortingByNote(response);
    });
  }, []);

  // console.log("yes tacos")
  const isAuthenticated = () => {
    if (
      sessionStorage.getItem("activeUser") !== null ||
      localStorage.getItem("activeUser") !== null
    ) {
      return true;
    } else {
      return false;
    }
  };
  // const isAuthenticated=true
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = (user) => {
    sessionStorage.setItem("activeUserID", JSON.stringify(user.userId));
    sessionStorage.setItem("activeUser", user.userName);
    setHasUser(isAuthenticated());
    console.log(hasUser);
    console.log(user.userName);
  };

  return (
    <>
      {/* <ApplicationViews {...props} /> */}
      <ApplicationViews setUser={setUser} hasUser={hasUser} />
    </>
  );
};

export default Stratagem;
