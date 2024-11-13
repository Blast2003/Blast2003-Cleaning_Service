import React from "react";
import "./staffNavbar.css";
import logo from "../assets/logo.png";
import staff from "../assets/staff.png";
import useStaffLogout from "../hooks/staffLogout"

const StaffNavbar = () => {

  const logout = useStaffLogout();

  return (
    <div className="staffNavbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/ourTeam">Our Team</a>
        </li>
        <li>
          <a href="/customerApprociate">Customer Approciate</a>
        </li>
      </ul>
      <div className="icon-user">
        <img src={staff} alt="" className="icon-user" />
      </div>
      <button id="logout" onClick={logout}>
        <h3>
          Logout  
        </h3>
      </button>
    </div>
  );
};

export default StaffNavbar;
