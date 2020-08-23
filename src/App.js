import React from "react";
import Navbar from "./components/layout/Navbar";
import Trips from "./components/trips/Trips";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <Trips />
      </div>
    </div>
  );
};

export default App;
