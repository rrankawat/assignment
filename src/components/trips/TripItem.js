import React from "react";
import { ImMinus } from "react-icons/im";

const TripItem = () => {
  return (
    <div>
      <div className="item">
        <span className="start">Date</span>
        <span className="mid">
          <span>Total KM: 165 KM</span> <span>Total KM: 165 KM</span>
        </span>
        <span className="end">
          <ImMinus />
        </span>
      </div>
      <div className="panel">
        <table className="table">
          <thead className="thead-info">
            <tr>
              <td>#</td>
              <td>Trip Starts(Node) to Trip Ends(Node)</td>
              <td>Driver Name</td>
              <td>Trip Expenses</td>
              <td>Trip Km</td>
              <td>Trip GPS Km</td>
              <td>Trip Time</td>
              <td>Odometer Reading</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>IFFOC CHOWK</td>
              <td></td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>
                <button className="btn btn-info">Movement Report</button>{" "}
                <button className="btn btn-info">Stoppage Report</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripItem;
