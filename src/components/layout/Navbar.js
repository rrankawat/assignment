import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <HiMenu />

      <button className="btn btn-white">
        <FaPowerOff /> Logout
      </button>
    </nav>
  );
};

export default Navbar;
