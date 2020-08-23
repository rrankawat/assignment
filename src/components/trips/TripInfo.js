import React from "react";
import { GiWallet } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { FaLongArrowAltRight, FaTruck } from "react-icons/fa";

const TripInfo = (props) => {
  const {
    vehicleNo,
    totalTrips,
    totalKm,
    totalTripTime,
    totalTime,
    totalExpences,
    otherExpenses,
  } = props;

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours} Hrs ${minutes} mm`;
  };

  return (
    <div className="info">
      <div className="info-left">
        <div className="info-list">
          <div className="info-left-1">
            <FaTruck size="20" style={{ marginRight: "0.2rem" }} /> {vehicleNo}
          </div>
          <div className="info-left-2">
            <FaTruck size="20" style={{ marginRight: "0.2rem" }} /> Total Trips
            : {totalTrips}
          </div>
          <div className="info-left-3">
            <AiFillDashboard size="20" style={{ marginRight: "0.2rem" }} />{" "}
            Total KM : {totalKm}
          </div>
        </div>
        <div className="info-list">
          <div className="info-left-4">
            <MdWatchLater size="20" style={{ marginRight: "0.2rem" }} /> Trip
            Time : {getTime(totalTripTime)}
          </div>
          <div className="info-left-5">
            <MdWatchLater size="20" style={{ marginRight: "0.2rem" }} /> Total
            Time : {getTime(totalTime)}
          </div>
          <div className="info-left-6">
            <GiWallet size="20" style={{ marginRight: "0.2rem" }} /> Total Exp:
            Rs. {totalExpences}
          </div>
        </div>
      </div>

      <div className="info-right">
        <GiWallet size="20" style={{ marginRight: "0.2rem" }} /> Other Exp: Rs.{" "}
        {otherExpenses}{" "}
        <FaLongArrowAltRight size="14" style={{ marginLeft: "0.2rem" }} />
      </div>
    </div>
  );
};

export default TripInfo;
