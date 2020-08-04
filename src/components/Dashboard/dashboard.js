import React, { useState }from "react";
import "../Dashboard/dashboard.css";
import NavBar from "../Navbar/Navbar"


const Dashboard = (props) => {
  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
   
  };
  // const [search, setSearch] = useState({field:""})

  // const handleFieldChange = evt => {
  //   const stateToChange = { ...search };

  //   stateToChange[evt.target.id] = evt.target.value;
  //   setSearch(stateToChange);

  // };

  return (
    <div>
      <NavBar {...props} clearUser={clearUser} />
      <h1 className="dashboard-title">Stratagem Developer Resources</h1><br>
      </br>
      <img className="registrationLogo" src={require("../Images/logo.png")}
      alt="imgLogo"></img>
    </div>
  );
};

export default Dashboard;
