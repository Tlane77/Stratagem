import React from "react";
import "../Dashboard/dashboard.css";
import NavBar from "../Navbar/Navbar"



const Dashboard = (props) => {
  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
   
  };
  

  return (
    <div>
      <NavBar {...props} clearUser={clearUser} />
      <h1 className="dashboard-title">Stratagem Developer Resources</h1>
      <br></br>
      <img
        className="resourceEditFormLogo"
        src={require("../Images/stratagembanner.jpg")}
        alt="imgLogo"
      ></img>
      <img
        className="registrationLogo7"
        src={require("../Images/multilogo7.png")}
        alt="imgLogo"
      ></img>
    </div>
  );
};

export default Dashboard;
