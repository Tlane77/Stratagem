import React from "react";
import "../Dashboard/dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = (props) => {
  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    props.history.push("/Login");
  };

  return (

    
    <div>
      <Navbar clearUser={clearUser} />
    </div>
  );
};

export default Dashboard;
