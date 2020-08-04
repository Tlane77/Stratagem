import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Registration from "./auth/registration";
import Login from "./auth/login";
import ResourceList from "./Resources/ResourceList"

import NoteForm from "./Notes/NoteForm"

import ResourceEditForm from "./Resources/ResourceEditForm"
import ResourceForm from "./Resources/ResourceForm";


const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  
  // const notes = true;
 

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
            return <Dashboard {...props} />;
          } else {
            return <Redirect exact to="/Login" />;
          }
        }}
      />
      

      {/* Resources */}
      <Route
        exact
        path="/Resources"
        render={(props) => {
          if (hasUser) {
            return (
              <ResourceList
                {...props}
                noteId={props.match.params.noteId}
              />
            );
          } else {
            return <Redirect exact to="/Login" />;
          }
        }}
      />
      {/* Resources */}
      <Route
        exact
        path="/resources/new"
        render={(props) => {
          return <ResourceForm {...props} />;
        }}
      />
      <Route
        exact
        path="/notes/new"
        render={(props) => {
          return <NoteForm {...props} />;
        }}
      />
      <Route
       
        path="/resources/:resourceId(\d+)/edit"
        render={(props) => {
          return <ResourceEditForm {...props} />;
        }}
      />
    </>
  );
};
export default ApplicationViews;