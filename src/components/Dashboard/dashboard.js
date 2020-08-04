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

    </div>
  )
};

export default Dashboard;
