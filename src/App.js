import React from "react";
import Navbar from "./components/layout/Navbar";
import TripFilter from "./components/trips/TripFilter";
import TripInfo from "./components/trips/TripInfo";
import TripItem from "./components/trips/TripItem";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <TripFilter />
        <TripInfo />
        <TripItem />
      </div>
    </div>
  );
};

export default App;
