import React, { useState, useEffect, Fragment } from "react";
import TripFilter from "./TripFilter";
import TripInfo from "./TripInfo";
import TripItem from "./TripItem";
import axios from "axios";
import Spinner from "../layout/spinner/Spinner";

const Trips = () => {
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    const getTrips = async () => {
      const url = `http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36`;
      const body = {
        clientId: 10,
        dataRecord: {
          userRoleId: 4,
          userRoleName: "COMPANY",
          userId: 10,
        },
        fromDate: 1577888571659,
        toDate: 1593613371659,
        tripId: 36,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(url, body, config);

      setTrips(res.data.data);
    };
    getTrips();
  }, []);

  if (trips) {
    const {
      vehicleNo,
      totalTrips,
      totalKm,
      totalTripTime,
      totalTime,
      totalExpences,
      tripDetails,
      otherExpenses,
    } = trips;

    return (
      <Fragment>
        <TripFilter />
        <TripInfo
          vehicleNo={vehicleNo}
          totalTrips={totalTrips}
          totalKm={totalKm}
          totalTripTime={totalTripTime}
          totalTime={totalTime}
          totalExpences={totalExpences}
          tripDetails={tripDetails}
          otherExpenses={otherExpenses}
        />

        {tripDetails.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </Fragment>
    );
  }
  return <Spinner />;
};

export default Trips;
