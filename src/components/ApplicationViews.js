import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Registration from "./auth/registration";
import Login from "./auth/login";
// import Posts from "./Posts";
// import Notes from "./Notes/NoteList"
import ResourceList from "./Resources/ResourceList"
// import Resources from "./Resources/Resources"
// import Notes from "./Notes"

// import ResourceForm from "../components/Resources/ResourceForm";
// import NoteList from "../components/Notes/NoteList"


const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  
  // const notes = true;
  // const resources = true;
  // const subjects = true;

  return (
    <>
      {/* Login */}
      <Route
        exact
        path="/Login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      {/* Registration */}
      <Route
        path="/Registration"
        render={(props) => {
          return <Registration setUser={setUser} {...props} />;
        }}
      />
      {/* Dashboard */}

      <Route
        exact
        path="/Dashboard"
        render={(props) => {
          if (hasUser) {
            return <Dashboard  {...props} />;
          } else {
            return <Redirect exact to="/" />;
          }
        }}
      />
       {/* <Route
        exact
        path="/Notes"
        render={(props) => {
          if (hasUser) {
            return <Notes notes={notes} {...props} />;
          } else {
            return <Redirect exact to="/" />;
          }
        }}
      />   */}

      {/* Resources */}
       <Route
        exact
        path="/ResourceList"
        render={(props) => {
          if (hasUser) {
            return <ResourceList {...props} />;
          } else {
            return <Redirect exact to="/" />;
          }
        }}
      /> 
      {/* <Route
        exact
        path="/Subjects"
        render={(props) => {
          if (hasUser) {
            return <Dashboard events={subjects} {...props} />;
          } else {
            return <Redirect exact to="/" />;
          }
        }}
      /> */}
      {/* <Route   //Stretch Goal
        exact
        path="/MeetUps"
        render={(props) => {
          if (hasUser) {
            return <Dashboard events={meetups} {...props} />;
          } else {
            return <Redirect exact to="/" />;
          }
        }}
      /> */}
    </>
  );
};
export default ApplicationViews;