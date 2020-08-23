import React from "react";
import { ImArrowRight } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

const TripItem = ({ trip }) => {
  const { startDay, endDay, tripLists } = trip;

  const tripStartEnd = (start, end) => {
    const s = new Date(parseInt(start));
    const e = new Date(parseInt(end));
    const diffHours = e.getHours() - s.getHours();
    const diffMinutes = e.getMinutes() - s.getMinutes();

    return `${s.toLocaleDateString()} at ${s.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })} - ${e.toLocaleDateString()} at ${e.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })} (${diffHours} Hrs ${diffMinutes} Minutes)`;
  };

  const getTime = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours} Hrs ${minutes} mm`;
  };

  const tripExpenses = (expenses) => {
    const total = expenses.map((exp) => exp.amount);
    if (total.length > 0) {
      return total.reduce((a, b) => a + b);
    }
    return 0;
  };

  const totalKM = () => {
    const kms = tripLists.map((trip) => parseInt(trip.totalKm));
    return kms.reduce((a, b) => a + b);
  };

  const totalExpense = () => {
    const expenses = tripLists.map((trip) => tripExpenses(trip.tripExpenses));
    return expenses.reduce((a, b) => a + b);
  };

  return (
    <div>
      <div className="item">
        <span className="start">Date: {tripStartEnd(startDay, endDay)}</span>
        <span className="mid">
          <span>Total KM: {totalKM()} KM</span>{" "}
          <span>Total Expense: {totalExpense()}</span>
        </span>
        <span className="end">
          <FaMinus />
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
            {tripLists.map((list, i) => (
              <tr key={list.tripId}>
                <td>{i + 1}</td>
                <td>
                  {list.startPointNode}{" "}
                  <ImArrowRight size="10" style={{ color: "#0fbcdb" }} />{" "}
                  {list.endPointNode}
                </td>
                <td>{list.driverName}</td>
                <td>
                  Rs. {tripExpenses(list.tripExpenses)}{" "}
                  <BsFillInfoCircleFill
                    size="14"
                    style={{ color: "#0fbcdb", float: "right" }}
                  />
                </td>
                <td>{list.totalKm} Km</td>
                <td>{list.gpsDistance.toFixed(2)} Km</td>
                <td>{getTime(list.tripRunningTime)}</td>
                <td className="space-between">
                  <span>{list.startODOMeter ? list.startODOMeter : "N/A"}</span>{" "}
                  <ImArrowRight size="10" style={{ color: "#0fbcdb" }} />{" "}
                  <span>{list.endODOMeter ? list.endODOMeter : "N/A"}</span>
                </td>
                <td>
                  <button className="btn btn-info">Movement Report</button>{" "}
                  <button className="btn btn-info">Stoppage Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripItem;
