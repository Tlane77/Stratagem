import React, { useState } from "react";
import ApplicationViews from "../components/ApplicationViews";
import "bootstrap/dist/css/bootstrap.min.css";


const Stratagem = (props) => {
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
  
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = (user) => {
    sessionStorage.setItem("activeUserId", JSON.stringify(user.userId));
    sessionStorage.setItem("activeUser", user.userName);
    setHasUser(isAuthenticated());
    console.log(hasUser);
    console.log(user.userName);
  };

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    
  };

  return (
    <>
      {/* <div></div> */}
      {/* <NavBar {...props} clearUser={clearUser} /> */}

      <ApplicationViews setUser={setUser} hasUser={hasUser} />

    </>
  );
};

export default Stratagem;
