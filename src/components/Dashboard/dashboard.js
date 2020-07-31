import React, { useState }from "react";
import "../Dashboard/dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = (props) => {
  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    props.history.push("/Login");
  };
  // const [search, setSearch] = useState({field:""})

  // const handleFieldChange = evt => {
  //   const stateToChange = { ...search };

  //   stateToChange[evt.target.id] = evt.target.value;
  //   setSearch(stateToChange);

  // };

  return (

    
    <div>
      <Navbar clearUser={clearUser} />
    </div>
  );
};

export default Dashboard;
