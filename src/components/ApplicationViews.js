import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Registration from "./auth/registration";
import Login from "./auth/login";
import ResourceList from "./Resources/ResourceList"
import NoteDetail from "./Notes/NoteDetail";

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
            return <Redirect exact to="/" />;
          }
        }}
      />
      {/* Make sure you add the `exact` attribute here */}
      <Route
        exact
        path="/notes"
        render={(props) => {
          return <NoteDetail />;
        }}
      />
      <Route
        path="/notes/:resourceId(\d+)"
        render={(props) => {
          // Pass the noteId to the NoteDetailComponent
          return (
            <NoteDetail resourceId={parseInt(props.match.params.resourceId)} />
          );
        }}
      />

      {/* Resources */}
      <Route
        exact
        path="/Resources"
        render={(props) => {
          if (hasUser) {
            return <ResourceList {...props} />;
          } else {
            return <Redirect exact to="/" />;
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
        path="/resources/:useResourceId(\d+)/edit"
        render={(props) => {
          return <ResourceEditForm {...props} />;
        }}
      />
    </>
  );
};
export default ApplicationViews;