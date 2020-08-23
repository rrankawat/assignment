import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaSearch } from "react-icons/fa";
import { BiExport } from "react-icons/bi";

const TripFilter = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <header className="header">
      <div className="page">
        <h3>Trip Summary</h3>
        <ul className="page-nav">
          <li>
            <a href="/#">Dashboard</a>
          </li>
          <li>Trip Summary</li>
        </ul>
      </div>

      <div className="filter">
        <div className="from">
          <label htmlFor="from">From</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            popperPlacement="bottom-end"
          />
        </div>
        <button className="search-btn">
          <FaSearch color="white" size="12" />
        </button>
        <button className="btn btn-outline-info">
          <BiExport color="white" /> Export
        </button>
      </div>
    </header>
  );
};

export default TripFilter;
